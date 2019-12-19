const { Router } = require('express');

const router = Router();

const mockedResources = {
  resources: [
    {
      type: 'food',
      amount: 1,
      generation: 60,
      updatedAt: 1353647,
    },
    {
      type: 'gold',
      amount: 1,
      generation: 60,
      updatedAt: 1235346,
    },
  ],
};

function getResourceAmount(initialAmount, generation, updatedAt) {
  const date = new Date();
  const minutesPassed = (date.getTime() - updatedAt) / 60000;
  return Math.round(initialAmount + generation * minutesPassed);
}

function getResources(req, res) {
  const caulatedResources = {
    resources: mockedResources.resources.map((resource) => ({
      type: resource.type,
      amount: getResourceAmount(resource.amount, resource.generation, resource.updatedAt),
      generation: resource.generation,
    })),
  };
  return res.status(200).send(caulatedResources);
}

router.get('/', getResources);

module.exports = router;
