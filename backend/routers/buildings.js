const { Router } = require('express');

const router = Router();

const {
  townhallRule, farmRule, mineRule, academyRule,
} = require('../rules');

const myBuildings = {
  buildings: [
    {
      id: 1,
      type: 'townhall',
      level: 1,
      hp: 1,
      started_at: 12345789,
      finished_at: 12399999,
    }, {
      id: 2,
      type: 'academy',
      level: 1,
      hp: 1,
      started_at: 12345789,
      finished_at: 12399999,
    }, {
      id: 3,
      type: 'farm',
      level: 1,
      hp: 1,
      started_at: 12345789,
      finished_at: 12399999,
    }, {
      id: 4,
      type: 'mine',
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
      case 'townhall':
        return res.status(200).send({ building: targetBuilding[0], rules: townhallRule });
      case 'academy':
        return res.status(200).send({ building: targetBuilding[0], rules: academyRule });
      case 'farm':
        return res.status(200).send({ building: targetBuilding[0], rules: farmRule });
      case 'mine':
        return res.status(200).send({ building: targetBuilding[0], rules: mineRule });
      default:
        return res.sendStatus(404);
    }
  }
  return res.sendStatus(404);
}

router.get('/', getBuildings);
router.get('/:buildingId', getBuildingById);

module.exports = router;
