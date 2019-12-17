const troopsRule = {
  leve1: {
    attack: 1,
    defence: 1,
    sustenance: 1,
    buildCost: 10,
    upgradeCost: 10,
  },
  leve2: {
    attack: 2,
    defence: 2,
    sustenance: 1,
    upgradeCost: 10,
  },
  leve3: {
    attack: 3,
    defence: 3,
    sustenance: 1,
  },
};

const buildingsRule = {
  Townhall: {
    buildCost: 10,
    upgradeCost: 10,
  },
  Academy: {
    buildCost: 10,
    upgradeCost: 10,
  },
  Farm: {
    buildCost: 10,
    upgradeCost: 10,
    generationType: 'food',
    generationRate: 10,
  },
  Mine: {
    buildCost: 10,
    upgradeCost: 10,
    generationType: 'gold',
    generationRate: 10,
  },
};

module.exports = {
  troopsRule,
  buildingsRule,
};
