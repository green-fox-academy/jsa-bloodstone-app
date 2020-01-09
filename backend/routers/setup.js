const { Router } = require('express');
const createError = require('http-errors');
const {
  UserModel, BuildingModel, TroopModel, ResourceModel,
} = require('../models');
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
    if (userInfo.kingdomList.length !== 0) {
      throw createError(400, 'This kingdom list is not empty.');
    }
    userInfo.kingdomList.push(kingdomList);
    userInfo.save();
    req.owner = owner;
    next();
  } catch (error) {
    next(error);
  }
}

async function setupBasicItems(req, res, next) {
  const { owner } = req;
  try {
    const checkBuilding = await BuildingModel.findOne(owner);
    const checkTroop = await TroopModel.findOne(owner);
    const checkResource = await ResourceModel.findOne(owner);
    if (checkBuilding || checkTroop || checkResource) {
      throw createError(400, 'This user already have basic items');
    }

    const setupBuilding = await BuildingModel.create(
      { type: 'Townhall', owner },
      { type: 'Academy', owner },
      { type: 'Farm', owner },
      { type: 'Mine', owner },
    );

    const setupTroop = await TroopModel.create({
      owner,
      countByLevel: { level: 1, count: 1 },
    });

    const currentTime = new Date().getTime();
    const setupResource = await ResourceModel.create(
      { owner, type: 'food', updatedAt: currentTime },
      { owner, type: 'gold', updatedAt: currentTime },
    );
    res.status(201).send({
      setupBuilding, setupTroop, setupResource, message: 'Welcome to Your Kingdom',
    });
  } catch (error) {
    next(error);
  }
}

router.post('/map', auth, chooseKingdom, setupBasicItems);

module.exports = router;
