const { Router } = require('express');
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

router.get('/:uid?', getUser);

module.exports = router;
