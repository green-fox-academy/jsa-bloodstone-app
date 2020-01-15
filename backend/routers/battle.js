const { Router } = require('express');
const createError = require('http-errors');
const { UserModel } = require('../models');
const { TroopModel } = require('../models');
const { auth } = require('../middlewares');

const router = Router();

async function getUsersOnPlanet(req, res, next) {
  const { _id: userId } = req.user;
  const { planet } = req.params;
  try {
    const usersOnPlanet = await UserModel.find(
      {
        planetList: planet,
        _id: { $ne: userId },
      },
      {
        email: false,
        password: false,
      },
    );
    const usersOnPlanetFiltered = await Promise.all(usersOnPlanet.map(async (element) => {
      const { _id } = element;
      const troop = await TroopModel.findOne({ owner: _id });
      return {
        _id,
        username: element.username,
        hp: troop ? troop.hp : 0,
        attack: troop ? troop.attack : 0,
        defence: troop ? troop.defence : 0,
        allLevels: troop ? troop.battleRating : 0,
        planetList: element.planetList,
      };
    }));
    res.send({ usersOnPlanet: usersOnPlanetFiltered });
  } catch (error) {
    next(error);
  }
}

function getCasualtyPercentage(troop, targetTroop, correction = 1) {
  return (targetTroop.attack / (targetTroop.attack + troop.attack))
    * ((troop.defence + 100) / (2 * troop.defence + 100))
    * (0.6 + 0.8 * Math.random())
    * correction;
}

function applyCasualty(troop, casualtyPercentage) {
  // eslint-disable-next-line no-restricted-syntax
  for (const element of troop.countByLevel) {
    element.count = Math.floor(element.count * (1 - casualtyPercentage));
  }
}

async function battle(req, res, next) {
  const { _id: attackerId } = req.user;
  const { targetId } = req.params;
  try {
    if (attackerId === targetId) {
      throw createError(400, 'Cannot attack yourself');
    }
    const attacker = await UserModel.findOne({ _id: attackerId });
    const defender = await UserModel.findOne({ _id: targetId });
    if (!attacker || !defender) {
      throw createError(404, 'User not found');
    }
    const attackerTroop = await TroopModel.findOne(
      { owner: attackerId },
      { _id: false, owner: false },
    );
    const defenderTroop = await TroopModel.findOne(
      { owner: targetId },
      { _id: false, owner: false },
    );

    const battleReport = [];

    if (!attackerTroop || !attackerTroop.countByLevel || attackerTroop.hp === 0) {
      throw createError(400, 'You don\'t have troops for attacking');
    }
    if (!defenderTroop || !defenderTroop.countByLevel || defenderTroop.hp === 0) {
      battleReport.push('No enemy troop in the kingdom\n');
      res.status(201).send({
        isWinner: true,
        battleReport,
        myTroopsLeft: attackerTroop.hp,
        enemyTroopsLeft: defenderTroop.hp,
      });
    }

    // Fleet battle stage
    const attackCasualtyFleetBattle = getCasualtyPercentage(attackerTroop, defenderTroop);
    const defenceCasualtyFleetBattle = getCasualtyPercentage(defenderTroop, attackerTroop);
    applyCasualty(attackerTroop, attackCasualtyFleetBattle);
    applyCasualty(defenderTroop, defenceCasualtyFleetBattle);
    const fleetBattleIsWinner = attackCasualtyFleetBattle < defenceCasualtyFleetBattle;
    battleReport.push({
      name: fleetBattleIsWinner ? 'Fleet Battle win' : 'Fleet Battle loss',
      myLoss: Math.round(attackCasualtyFleetBattle * 100),
      enemyLoss: Math.round(defenceCasualtyFleetBattle * 100),
    });
    if (!fleetBattleIsWinner) {
      res.status(201).send({
        isWinner: false,
        battleReport,
        myTroopsLeft: attackerTroop.hp,
        enemyTroopsLeft: defenderTroop.hp,
      });
      return;
    }

    // Orbital striking stage
    const defenceCasualtyStriking = getCasualtyPercentage(defenderTroop, attackerTroop, 0.2);
    applyCasualty(defenderTroop, defenceCasualtyStriking);
    battleReport.push({
      name: 'Orbital striking',
      myLoss: 0,
      enemyLoss: Math.round(defenceCasualtyStriking * 100),
    });

    // Landing operation stage
    const attackCasualtyLandingOperation = getCasualtyPercentage(attackerTroop, defenderTroop);
    const defenceCasualtyLandingOperation = getCasualtyPercentage(
      defenderTroop,
      attackerTroop,
      0.8,
    );
    applyCasualty(attackerTroop, attackCasualtyLandingOperation);
    applyCasualty(defenderTroop, defenceCasualtyLandingOperation);
    const landOperationIsWinner = attackCasualtyLandingOperation < defenceCasualtyLandingOperation;
    battleReport.push({
      name: landOperationIsWinner ? 'Landing operation win' : 'Landing operation loss',
      myLoss: Math.round(attackCasualtyLandingOperation * 100),
      enemyLoss: Math.round(defenceCasualtyLandingOperation * 100),
    });
    if (!landOperationIsWinner) {
      res.status(201).send({
        isWinner: false,
        battleReport,
        myTroopsLeft: attackerTroop.hp,
        enemyTroopsLeft: defenderTroop.hp,
      });
      return;
    }

    res.status(201).send({
      isWinner: true,
      battleReport,
      myTroopsLeft: attackerTroop.hp,
      enemyTroopsLeft: defenderTroop.hp,
    });
  } catch (error) {
    next(error);
  }
}

router.get('/:targetId', auth, battle);
router.get('/planet/:planet', auth, getUsersOnPlanet);

module.exports = router;
