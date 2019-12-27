const { Router } = require('express');
const { TroopModel } = require('../models');

const router = Router();

async function getTroops(req, res, next) {
  try {
    const troops = await TroopModel.find({});
    res.send({ troops });
  } catch (error) {
    next(error);
  }
}

async function createTroop(req, res, next) {
  const level = Number.parseInt(req.query.level, 10) || 1;
  const countByLevel = {
    level,
    count: 1,
  };

  try {
    const result = await TroopModel.create({
      owner: 1,
      countByLevel,
    });
    res.send(result);
  } catch (error) {
    next(error);
  }
}

router.get('/', getTroops);
router.post('/', createTroop);

module.exports = router;
