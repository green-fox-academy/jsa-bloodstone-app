const { Router } = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const createError = require('http-errors');
const { UserModel } = require('../models');

const router = Router();

async function getUser(req, res, next) {
  const id = Number.parseInt(req.params.uid, 10);
  try {
    if (!id) {
      throw createError(400, 'Please specify user id');
    }
    const user = await UserModel.find({ id }, '-_id').limit(1);
    if (user.length === 0) {
      throw createError(404, 'User not found with that id');
    }
    res.send(user[0]);
  } catch (error) {
    next(error);
  }
}

function isValidEmail(email) {
  const emailChecker = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailChecker.test(String(email).toLowerCase());
}

async function register(req, res, next) {
  const {
    username, password, email, kingdomName,
  } = req.body;
  try {
    if (!username && !password) {
      throw createError(400, 'Username and password are required.');
    }
    if (!username) {
      throw createError(400, 'Username is required.');
    }
    if (!password) {
      throw createError(400, 'Password is required.');
    }
    if (!email) {
      throw createError(400, 'Email is required.');
    }
    if (!isValidEmail(email)) {
      throw createError(400, 'Email is not valid.');
    }
    if (password.length < 8) {
      throw createError(400, 'Password must be at least 8 characters.');
    }
    if (await UserModel.findOne({ username })) {
      throw createError(400, 'Username is already taken.');
    }
    if (await UserModel.findOne({ email })) {
      throw createError(400, 'Email is already taken.');
    }
    const passwordHash = await bcrypt.hash(password, 8);
    const result = await UserModel.create({
      email,
      username,
      password: passwordHash,
      kingdomName: kingdomName || `${username}'s kingdom`,
      kingdomList: [],
    });
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  const { username, password } = req.body;
  try {
    if (!username && !password) {
      throw createError(400, 'All fields are required.');
    }
    if (!username) {
      throw createError(400, 'Username is required.');
    }
    if (!password) {
      throw createError(400, 'Password is required.');
    }
    const user = await UserModel.findOne({ username });
    if (!user || !await bcrypt.compare(password, user.password)) {
      throw createError(400, 'Username or password is incorrect.');
    }

    user.password = undefined;
    const token = jwt.sign({ user }, process.env.APP_SECRET || 'testSecret');
    res.status(200).send({ token });
  } catch (error) {
    next(error);
  }
}

router.post('/login', login);
router.post('/register', register);
router.get('/:uid?', getUser);

module.exports = router;