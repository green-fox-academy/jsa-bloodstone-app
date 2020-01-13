const { Router } = require('express');
const { ResourceModel } = require('../models');
const { auth } = require('../middlewares');

const router = Router();

async function getResources(req, res, next) {
  const { _id: owner } = req.user;
  try {
    const result = await ResourceModel.find({
      owner,
    });
    const resultFiltered = result.map(
      ({ type, generation, amount }) => ({ type, generation, amount }),
    );
    res.status(200).send({ resources: resultFiltered });
  } catch (error) {
    next(error);
  }
}

router.get('/', auth, getResources);

module.exports = router;
