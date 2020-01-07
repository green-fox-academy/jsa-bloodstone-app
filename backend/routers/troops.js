const { Router } = require('express');
const { TroopModel } = require('../models');
const { auth } = require('../middlewares');

const router = Router();

async function getTroops(req, res, next) {
  const { user } = req;
  console.log(user);
  try {
    const troops = await TroopModel.find({ owner: user.id });
    res.send({ troops });
  } catch (error) {
    next(error);
  }
}

async function createTroop(req, res, next) {
  const { user } = req;
  console.log(user);
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

router.get('/', auth, getTroops);
router.post('/', auth, createTroop);

module.exports = router;
