const { Router } = require('express');
const { ProgressModel } = require('../models');

const router = Router();

async function getProgress(req, res, next) {
  try {
    const result = await ProgressModel.find(
      {
        owner: 1,
      },
      {
        category: true,
        type: true,
        toLevel: true,
        finishAt: true,
      },
    );
    res.status(200).send({ progresses: result });
  } catch (error) {
    next(error);
  }
}

router.get('/', getProgress);

module.exports = router;
