const { Router } = require('express');

const router = Router();

const {
  townhallRule, farmRule, mineRule, academyRule, foxRule,
} = require('../rules');

const myBuildings = {
  buildings: [
    {
      id: 1,
      type: 'Townhall',
      level: 1,
      hp: 1,
      started_at: 12345789,
      finished_at: 12399999,
    }, {
      id: 2,
      type: 'Academy',
      level: 1,
      hp: 1,
      started_at: 12345789,
      finished_at: 12399999,
    }, {
      id: 3,
      type: 'Farm',
      level: 1,
      hp: 1,
      started_at: 12345789,
      finished_at: 12399999,
    }, {
      id: 4,
      type: 'Mine',
      level: 1,
      hp: 1,
      started_at: 12345789,
      finished_at: 12399999,
    },
  ],
};

function getBuildings(req, res) {
  return res.status(200).send(myBuildings);
}

function getBuildingById(req, res) {
  const buildingId = Number.parseInt(req.params.buildingId, 10);
  if (Number.isNaN(buildingId) || buildingId <= 0) {
    return res.sendStatus(400);
  }
  const targetBuilding = myBuildings.buildings.filter((building) => buildingId === building.id);
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
router.get('/:buildingId', getBuildingById);

module.exports = router;
