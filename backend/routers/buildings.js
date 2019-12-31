const { Router } = require('express');
const createError = require('http-errors');
const { BuildingModel } = require('../models');

const router = Router();

const {
  townhallRule, farmRule, mineRule, academyRule, foxRule,
} = require('../rules');

async function getBuildings(req, res, next) {
  try {
    const buildings = await BuildingModel.find({}, '-_id');
    res.send({ buildings });
  } catch (error) {
    next(error);
  }
}

async function createBuilding(req, res, next) {
  const type = req.params.buildingType;
  const buildings = await BuildingModel.find({});
  const index = buildings.length ? buildings.length + 1 : 1;
  try {
    const result = await BuildingModel.create({
      id: index,
      type,
      level: 1,
      owner: 1,
    });
    res.send(result);
  } catch (error) {
    next(error);
  }
}

function findSelectedRules(type) {
  switch (type) {
    case 'Townhall':
      return townhallRule;
    case 'Academy':
      return academyRule;
    case 'Farm':
      return farmRule;
    case 'Mine':
      return mineRule;
    default:
      return null;
  }
}

async function getBuildingById(req, res, next) {
  const id = Number.parseInt(req.params.buildingId, 10);
  try {
    if (Number.isNaN(id) || id <= 0) {
      throw createError(400, 'Please use a valid building id');
    }
    const targetBuilding = await BuildingModel.find({ id }, '-_id').limit(1);
    if (targetBuilding.length === 0) {
      throw createError(404, 'Buildings list is empty');
    }
    res.send({
      building: targetBuilding[0],
      rules: {
        buildingRules: findSelectedRules(targetBuilding[0].type),
        troopsRules: foxRule,
      },
    });
  } catch (error) {
    next(error);
  }
}

router.get('/', getBuildings);
router.post('/:buildingType', createBuilding);
router.get('/:buildingId', getBuildingById);

module.exports = router;
