const { Router } = require('express');
const { ProgressModel } = require('../models');
const { auth } = require('../middlewares');

const router = Router();

async function getProgress(req, res, next) {
  const { _id: owner } = req.user;
  try {
    const result = await ProgressModel.find(
      { owner },
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

router.get('/', auth, getProgress);

module.exports = router;
