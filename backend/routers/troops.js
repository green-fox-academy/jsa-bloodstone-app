const { Router } = require('express');

const router = Router();

const myTroops = {
  troops: [
    {
      id: 1,
      level: 1,
      hp: 1,
      attack: 1,
      defence: 1,
      started_at: 12345789,
      finished_at: 12399999,
    }, {
      id: 2,
      level: 1,
      hp: 1,
      attack: 1,
      defence: 1,
      started_at: 12345789,
      finished_at: 12399999,
    },
  ],
};

function getTroops(req, res) {
  return res.status(200).send(myTroops);
}

router.get('/troops', getTroops);

module.exports = router;
