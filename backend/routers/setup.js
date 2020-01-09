const { Router } = require('express');
const createError = require('http-errors');
const { UserModel } = require('../models');
const { auth } = require('../middlewares');

const router = Router();

async function chooseKingdom(req, res, next) {
  const { _id: owner } = req.user;
  const { kingdomList } = req.body;
  try {
    if (!kingdomList) {
      throw createError(400, 'Please choose a kingdom to start your trip.');
    }
    const userInfo = await UserModel.findById(owner);
    if (userInfo.kingdomList.length === 0) {
      throw createError(400, 'This kingdom list is not empty.');
    }
    userInfo.kingdomList.push(kingdomList);
    userInfo.save();
    req.owner = owner;
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
}

router.post('/map', auth, chooseKingdom);

module.exports = router;
