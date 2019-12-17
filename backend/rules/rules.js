const troopsRule = {
  buildCost: 10,
  buildSecond: 60,
  leve1: {
    attack: 1,
    defence: 1,
    sustenance: 1,
    upgradeCost: 20,
    upgradeSecond: 120,
  },
  leve2: {
    attack: 2,
    defence: 2,
    sustenance: 1,
    upgradeCost: 40,
    upgradeSecond: 360,
  },
  leve3: {
    attack: 3,
    defence: 3,
    sustenance: 1,
    upgradeCost: undefined,
    upgradeSecond: undefined,
  },
};

const buildingsRule = {
  Townhall: {
    buildCost: 100,
    buildSecond: 60,
    buildLimit: 1,
    leve1: {
      upgradeCost: 250,
      upgradeSecond: 1200,
      maxBuildings: 4,
    },
    leve2: {
      upgradeCost: 400,
      upgradeSecond: 3600,
      maxBuildings: 8,
    },
    leve3: {
      upgradeCost: undefined,
      upgradeSecond: undefined,
      maxBuildings: 16,
    },
  },

  Academy: {
    buildCost: 100,
    buildSecond: 60,
    leve1: {
      upgradeCost: 250,
      upgradeSecond: 1200,
      troopsNumLimit: 10,
      troopsLevelLimit: 1,
    },
    leve2: {
      upgradeCost: 400,
      upgradeSecond: 3600,
      troopsNumLimit: 20,
      troopsLevelLimit: 2,
    },
    leve3: {
      upgradeCost: undefined,
      upgradeSecond: undefined,
      troopsNumLimit: 30,
      troopsLevelLimit: 3,
    },
  },

  Farm: {
    buildCost: 100,
    buildSecond: 60,
    generationType: 'food',
    leve1: {
      upgradeCost: 250,
      upgradeSecond: 1200,
      generationRate: 1,
    },
    leve2: {
      upgradeCost: 400,
      upgradeSecond: 3600,
      generationRate: 2,
    },
    leve3: {
      upgradeCost: undefined,
      upgradeSecond: undefined,
      generationRate: 5,
    },

  },

  Mine: {
    buildCost: 100,
    buildSecond: 60,
    generationType: 'gold',
    leve1: {
      upgradeCost: 250,
      upgradeSecond: 1200,
      generationRate: 2,
    },
    leve2: {
      upgradeCost: 400,
      upgradeSecond: 3600,
      generationRate: 5,
    },
    leve3: {
      upgradeCost: undefined,
      upgradeSecond: undefined,
      generationRate: 10,
    },
  },
};

module.exports = {
  troopsRule,
  buildingsRule,
};
