const { Router } = require('express');

const router = Router();

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
    return res.status(200).send(targetBuilding[0]);
  }
  return res.sendStatus(404);
}

router.get('/', getBuildings);
router.get('/:buildingId', getBuildingById);

module.exports = router;
