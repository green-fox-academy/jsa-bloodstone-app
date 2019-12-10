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
      type: 'farm',
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

router.get('/buildings', getBuildings);

module.exports = router;
