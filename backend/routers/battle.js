const { Router } = require('express');
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

router.get('/planet/:planet', auth, getUsersOnPlanet);

module.exports = router;
