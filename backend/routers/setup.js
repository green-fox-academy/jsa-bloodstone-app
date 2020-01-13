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
    const checkBuilding = BuildingModel.findOne({ owner });
    const checkResource = ResourceModel.findOne({ owner });
    const checkTroop = TroopModel.findOne({ owner });

    const checks = await Promise.all([
      checkBuilding,
      checkResource,
      checkTroop,
    ]);
    const filter = checks.filter((item) => item !== null);
    if (filter.length > 0) {
      throw createError(400, 'This user already have basic items.');
    }

    const setupResource = ResourceModel.createBasicResources(owner);
    const setupBuilding = BuildingModel.createBasicBuildings(owner);
    const setupTroop = TroopModel.createBasicTroops(owner);

    await Promise.all([
      setupResource,
      setupBuilding,
      setupTroop,
    ]);

    res.status(201).send({
      status: 201,
      message: 'Welcome to Your Kingdom',
    });
  } catch (error) {
    next(error);
  }
}

router.post('/map', auth, chooseKingdom, setupBasicItems);

module.exports = router;
