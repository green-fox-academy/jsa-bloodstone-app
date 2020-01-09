const { Router } = require('express');
const createError = require('http-errors');
const { UserModel } = require('../models');
const { auth } = require('../middlewares');

const router = Router();

async function chooseKingdom(req, res, next) {
  const { _id: owner } = req.user;
  const { kingdomList } = req.body;
  console.log(kingdomList);
  try {
    if (!kingdomList) {
      throw createError(400, 'Please choose a kingdom to start your trip.');
    }
    const userInfo = await UserModel.findById(owner);
    console.log(userInfo);
    userInfo.kingdomList.push(kingdomList);
    console.log(userInfo);
    userInfo.save();
    req.owner = owner;
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
}

router.post('/map', auth, chooseKingdom);

module.exports = router;
