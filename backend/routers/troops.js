const { Router } = require('express');
const createError = require('http-errors');
const { TroopModel, ResourceModel } = require('../models');
const { auth } = require('../middlewares');

const router = Router();

const { foxRule } = require('../rules');

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
    const cost = parseInt(foxRule.constructionCost, 10);
    if (!await ResourceModel.checkIfHasEnoughGold(owner, cost)) {
      throw createError(400, 'You don\'t have enough money');
    }
    await ResourceModel.reduceGold(owner, cost);
    const troops = await TroopModel.createTroop(owner, level);
    res.status(201).send({ status: 201, troops });
  } catch (error) {
    next(error);
  }
}

router.get('/', auth, getTroops);
router.post('/', auth, createTroop);

module.exports = router;
