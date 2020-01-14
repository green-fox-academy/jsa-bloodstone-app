const { Router } = require('express');
const { UserModel } = require('../models');

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
    ).populate('troop');
    const usersInPlanetFiltered = usersInPlanet.map((element) => {
      const { _id } = element;
      return {
        _id,
        username: element.username,
        hp: element.troop ? element.troop.hp : 0,
        attack: element.troop ? element.troop.attack : 0,
        defence: element.troop ? element.troop.defence : 0,
        allLevels: element.troop ? element.troop.battleRating : 0,
        planetList: element.planetList,
      };
    });
    res.send({ usersInPlanet: usersInPlanetFiltered });
  } catch (error) {
    next(error);
  }
}

router.get('/planet/:planet', getUsersInPlanet);

module.exports = router;
