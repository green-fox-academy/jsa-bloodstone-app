const { Router } = require('express');
const createError = require('http-errors');
const { BuildingModel, ResourceModel } = require('../models');
const { auth } = require('../middlewares');

const router = Router();

const {
  townhallRule, farmRule, mineRule, academyRule, foxRule,
} = require('../rules');

const typeToRules = {
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
  const { buildingType } = req.params;
  try {
    if (!buildingType) {
      throw createError(400, 'Type is required');
    }
    if (buildingType !== 'Mine' && buildingType !== 'Farm') {
      throw createError(400, 'Wrong type');
    }

    const moneyRequired = parseInt(typeToRules[buildingType].constructionCost, 10);
    const resourceOfUser = await ResourceModel.find({ owner });
    const [moneyInHand] = resourceOfUser
      .filter(({ type }) => (type === 'gold'))
      .map(({ amount }) => amount);
    if (moneyRequired > moneyInHand) {
      throw createError(400, 'You don\'t have enough money');
    }

    const minusGold = await ResourceModel.findOneAndUpdate(
      { owner, type: 'gold' },
      { $inc: { amount: -{ moneyRequired } } },
      { new: true, fields: '-_id' },
    ).exec();
    const createNewBuilding = await BuildingModel.create({
      type: buildingType,
      owner,
    });
    res.send({ minusGold, createNewBuilding });
  } catch (error) {
    next(error);
  }
}

async function getBuildingById(req, res, next) {
  const id = req.params.buildingId;
  try {
    const building = await BuildingModel.findById(id);
    if (!building) {
      throw createError(404, 'This building doesn\'t exist.');
    }
    res.send({
      building,
      rules: {
        buildingRules: typeToRules[building.type],
        troopsRules: foxRule,
      },
    });
  } catch (error) {
    next(error);
  }
}

async function upgradeBuildingById(req, res, next) {
  const id = req.params.buildingId;
  try {
    const result = await BuildingModel.findByIdAndUpdate(
      id, { $inc: { level: 1 } }, { new: true },
    ).exec();
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
}

router.get('/', auth, getBuildings);
router.post('/:buildingType', auth, createBuilding);
router.get('/:buildingId', getBuildingById);
router.post('/:buildingId/upgrade', upgradeBuildingById);

module.exports = router;
