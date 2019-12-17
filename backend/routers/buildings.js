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

const mockedTownhall = {
  id: 1,
  type: 'Townhall',
  level: 1,
  hp: 1,
  started_at: 12345789,
  finished_at: 12399999,
};

const mockedAcademy = {
  id: 2,
  type: 'Academy',
  level: 1,
  hp: 1,
  started_at: 12345789,
  finished_at: 12399999,
};

const mockedFarm = {
  id: 3,
  type: 'Farm',
  level: 1,
  hp: 1,
  started_at: 12345789,
  finished_at: 12399999,
};

const mockedMine = {
  id: 4,
  type: 'Mine',
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
  if (buildingId === 1) {
    return res.status(200).send(mockedTownhall);
  }
  if (buildingId === 2) {
    return res.status(200).send(mockedAcademy);
  }
  if (buildingId === 3) {
    return res.status(200).send(mockedFarm);
  }
  if (buildingId === 4) {
    return res.status(200).send(mockedMine);
  }
  return res.sendStatus(200);
}

router.get('/', getBuildings);
router.get('/:buildingId', getBuildingById);

module.exports = router;
