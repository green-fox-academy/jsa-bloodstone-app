const { Router } = require('express');
const { UserModel } = require('../models');
const { TroopModel } = require('../models');

const router = Router();

async function getUsersInPlanet(req, res, next) {
  const { planet } = req.params;
  try {
    const usersInPlanet = await UserModel.find(
      { planetList: planet },
      {
        email: false,
        password: false,
      },
    );
    const usersInPlanetFiltered = await Promise.all(usersInPlanet.map(async (element) => {
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
    res.send({ usersInPlanet: usersInPlanetFiltered });
  } catch (error) {
    next(error);
  }
}

router.get('/planet/:planet', getUsersInPlanet);

module.exports = router;
