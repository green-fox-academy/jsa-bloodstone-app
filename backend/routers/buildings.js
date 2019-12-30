const { Router } = require('express');
const { BuildingModel } = require('../models');

const router = Router();

const {
  townhallRule, farmRule, mineRule, academyRule, foxRule,
} = require('../rules');

async function getBuildings(req, res, next) {
  try {
    const buildings = await BuildingModel.find({});
    res.send({ buildings });
  } catch (error) {
    next(error);
  }
}

async function createBuilding(req, res, next) {
  const type = req.params.buildingType;

  try {
    const result = await BuildingModel.create({
      type: type,
      level: 1,
      owner: 1,
    });
    res.send(result);
  } catch (error) {
    next(error);
  }
}

// async function updateBuildingById(req, res, next) {
//   const id = req.query.id;

//   try {
//     building = await BuildingModel.find({});
//   } catch (error) {
//     next(error);
//   }
// }

async function getBuildingById(req, res, next) {
  const buildingId = Number.parseInt(req.params.buildingId, 10);
  if (Number.isNaN(buildingId) || buildingId <= 0) {
    return res.sendStatus(400);
  }
  const buildings = await BuildingModel.find({});
  const targetBuilding = buildings.filter((building) => buildingId === building.id);
  if (targetBuilding.length > 0) {
    switch (targetBuilding[0].type) {
      case 'Townhall':
        return res.status(200).send({
          building: targetBuilding[0],
          rules: {
            buildingRules: townhallRule,
            troopsRules: foxRule,
          },
        });
      case 'Academy':
        return res.status(200).send({
          building: targetBuilding[0],
          rules: {
            buildingRules: academyRule,
            troopsRules: foxRule,
          },
        });
      case 'Farm':
        return res.status(200).send({
          building: targetBuilding[0],
          rules: {
            buildingRules: farmRule,
            troopsRules: foxRule,
          },
        });
      case 'Mine':
        return res.status(200).send({
          building: targetBuilding[0],
          rules: {
            buildingRules: mineRule,
            troopsRules: foxRule,
          },
        });
      default:
        return res.sendStatus(404);
    }
  }
  return res.sendStatus(404);
}

router.get('/', getBuildings);
router.post('/:buildingType', createBuilding);
router.get('/:buildingId', getBuildingById);
// router.put('/:buildingId/upgrade', updateBuildingById);

module.exports = router;
