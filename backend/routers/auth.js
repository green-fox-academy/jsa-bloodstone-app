const { Router } = require('express');
const jwt = require('jsonwebtoken');
const createError = require('http-errors');
const { UserModel } = require('../models');

const router = Router();

const userA = {
  id: 0,
  username: 'aaa',
  email: 'aaa@gmail.com',
};

async function login(req, res, next) {
  const { username, password } = req.body;
  try {
    if (!username) {
      throw createError(404, 'Username is required.');
    }
    if (!password) {
      throw createError(404, 'Password is required.');
    }
    const user = await UserModel.findOne({ username });
    if (!user) {
      throw createError(404, 'User not found');
    }
    // todo: check password
    const token = jwt.sign({ userA }, process.env.APP_SECRET);
    res.status(200).send({ token });
  } catch (error) {
    next(error);
  }
}

async function testProtected(req, res) {
  res.status(200).send('protected');
}

async function auth(req, res, next) {
  const bearerHeader = req.headers.authorization;
  try {
    const token = bearerHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.APP_SECRET);
    req.decoded = decoded;
    next();
  } catch (error) {
    res.sendStatus(403);
  }
}

router.get('/login', login);
router.get('/testProtected', auth, testProtected);

module.exports = router;
