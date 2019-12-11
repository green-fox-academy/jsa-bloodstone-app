const { Router } = require('express');

const router = Router();

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

const mockedOneBuilding = {
  id: 2,
  type: 'farm',
  level: 1,
  hp: 1,
  started_at: 12345789,
  finished_at: 12399999,
};

function getBuildings(req, res) {
  return res.status(200).send(myBuildings);
}

function getBuildingById(req, res) {
  const buildingId = Number.parseInt(req.params.buildingId, 10);
  if (Number.isNaN(buildingId) || buildingId <= 0) {
    return res.sendStatus(400);
  }
  return res.status(200).send(mockedOneBuilding);
}

router.get('/', getBuildings);
router.get('/:buildingId', getBuildingById);

module.exports = router;
