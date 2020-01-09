const { Router } = require('express');
const createError = require('http-errors');
const { BuildingModel, ResourceModel } = require('../models');
const { auth } = require('../middlewares');

const router = Router();

const {
  townhallRule, farmRule, mineRule, academyRule, foxRule,
} = require('../rules');

const buildingRules = {
  Townhall: townhallRule,
  Academy: academyRule,
  Farm: farmRule,
  Mine: mineRule,
};

async function getBuildings(req, res, next) {
  const { _id: owner } = req.user;
  try {
    const buildings = await BuildingModel.find({ owner });
    res.send({ buildings });
  } catch (error) {
    next(error);
  }
}

async function createBuilding(req, res, next) {
  const { _id: owner } = req.user;
  const { buildingType } = req.body;
  try {
    if (!buildingType) {
      throw createError(400, 'Type is required');
    }
    if (buildingType !== 'Mine' && buildingType !== 'Farm') {
      throw createError(400, 'Wrong type');
    }

    const priceOfItem = parseInt(buildingRules[buildingType].constructionCost, 10);
    const upgradeBuilding = await ResourceModel.createNewItem(owner, priceOfItem);
    if (!upgradeBuilding){
      throw createError(400, 'You don\'t have enough money');
    }
    // const resourcesOfUser = await ResourceModel.find({ owner });
    // const [moneyInHand] = resourcesOfUser
    //   .filter(({ type }) => (type === 'gold'))
    //   .map(({ amount }) => amount);
    // if (moneyRequired > moneyInHand) {
    //   throw createError(400, 'You don\'t have enough money');
    // }
    // const minusGold = await ResourceModel.findOneAndUpdate(
    //   { owner, type: 'gold' },
    //   { $inc: { amount: -{ moneyRequired } } },
    //   { new: true, fields: '-_id' },
    // ).exec();
    const newBuilding = await BuildingModel.create({
      type: buildingType,
      owner,
    });
    res.send({ newBuilding });
  } catch (error) {
    next(error);
  }
}

async function getBuildingById(req, res, next) {
  const { _id: owner } = req.user;
  const id = req.params.buildingId;
  try {
    const building = await BuildingModel.findById(id);
    if (!building) {
      throw createError(404, 'This building doesn\'t exist.');
    }
    if(building.owner != owner){
      throw createError(404, 'This building doesn\'t belong to you');
    }
    res.send({
      building,
      rules: {
        buildingRules: buildingRules[building.type],
        troopsRules: foxRule,
      },
    });
  } catch (error) {
    next(error);
  }
}


// TODO
async function upgradeBuildingById(req, res, next) {
  const { _id: owner } = req.user;
  const id = req.params.buildingId;
  try {
    const result = await BuildingModel.findOneAndUpdate(
      { id, owner }, { $inc: { level: 1 } }, { new: true },
    ).exec();
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
}

router.get('/', auth, getBuildings);
router.post('/', auth, createBuilding);
router.get('/:buildingId', auth, getBuildingById);
router.patch('/:buildingId', auth, upgradeBuildingById);

module.exports = router;
