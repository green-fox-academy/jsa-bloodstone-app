const { Router } = require('express');
const { ResourceModel } = require('../models');

const router = Router();

async function getResources(req, res, next) {
  try {
    const result = await ResourceModel.find({
      owner: 1,
    });
    const resultFiltered = result.map(
      ({ type, generation, amount }) => ({ type, generation, amount }),
    );
    res.status(200).send({ resources: resultFiltered });
  } catch (error) {
    next(error);
  }
}

router.get('/', getResources);

module.exports = router;
