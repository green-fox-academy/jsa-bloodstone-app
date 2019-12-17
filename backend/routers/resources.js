const { Router } = require('express');

const router = Router();

const mockedResources = {
  resources: [
    {
      type: 'food',
      amount: 1,
      generation: 1,
      updatedAt: 1353647,
    },
    {
      type: 'gold',
      amount: 1,
      generation: 1,
      updatedAt: 1235346,
    },
  ],
};

function getResources(req, res) {
  return res.status(200).send(mockedResources);
}

router.get('/', getResources);

module.exports = router;
