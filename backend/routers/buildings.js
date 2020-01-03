const { Router } = require('express');
const createError = require('http-errors');
const { BuildingModel, ResourceModel } = require('../models');

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
  try {
    const buildings = await BuildingModel.find({ owner: 1 }, '-_id');
    res.send({ buildings });
  } catch (error) {
    next(error);
  }
}

async function createBuilding(req, res, next) {
  const { buildingType } = req.params;
  try {
    if (!buildingType) {
      throw createError(400, 'Type is required');
    }
    if (buildingType !== 'Mine' && buildingType !== 'Farm') {
      throw createError(400, 'Wrong type');
    }

    const moneyRequired = parseInt(typeToRules[buildingType].constructionCost, 10);
    const resourceOfUser = await ResourceModel.find({ owner: 1 });
    const [moneyInHand] = resourceOfUser
      .filter(({ type }) => (type === 'gold'))
      .map(({ amount }) => amount);
    if (moneyRequired > moneyInHand) {
      throw createError(400, 'You don\'t have enough money');
    }

    const minusGold = await ResourceModel.findOneAndUpdate(
      { owner: 1, type: 'gold' },
      { $inc: { amount: -{ moneyRequired } } },
      { new: true, fields: '-_id' },
    ).exec();
    const createNewBuilding = await BuildingModel.create({
      buildingType,
      owner: 1,
    });
    res.send({ minusGold, createNewBuilding });
  } catch (error) {
    next(error);
  }
}

async function getBuildingById(req, res, next) {
  const id = Number.parseInt(req.params.buildingId, 10);
  try {
    if (Number.isNaN(id) || id <= 0) {
      throw createError(400, 'Please use a valid building id');
    }
    const [building] = await BuildingModel.find({ id }, '-_id').limit(1);
    if (!building) {
      throw createError(404, 'Buildings list is empty');
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
  const id = Number.parseInt(req.params.buildingId, 10);
  try {
    if (Number.isNaN(id) || id <= 0) {
      throw createError(400, 'Please use a valid building id');
    }
    const result = await BuildingModel.findOneAndUpdate(
      { id }, { $inc: { level: 1 } }, { new: true, fields: '-_id' },
    ).exec();
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
}

router.get('/', getBuildings);
router.post('/:buildingType', createBuilding);
router.get('/:buildingId', getBuildingById);
router.post('/:buildingId/upgrade', upgradeBuildingById);

module.exports = router;
