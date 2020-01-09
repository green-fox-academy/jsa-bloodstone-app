const { Router } = require('express');
const { TroopModel } = require('../models');
const { auth } = require('../middlewares');

const router = Router();

async function getTroops(req, res, next) {
  const { _id: owner } = req.user;
  try {
    const troops = await TroopModel.find({ owner });
    res.send({ troops });
  } catch (error) {
    next(error);
  }
}

async function createTroop(req, res, next) {
  const { _id: owner } = req.user;
  const level = Number.parseInt(req.query.level, 10) || 1;
  try {
    const troops = await TroopModel.createTroop(owner, level);
    res.send({ troops });
  } catch (error) {
    next(error);
  }
}

router.get('/', auth, getTroops);
router.post('/', auth, createTroop);

module.exports = router;
