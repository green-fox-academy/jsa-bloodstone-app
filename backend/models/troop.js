/* eslint func-names: ["error", "never"] */
const { Schema } = require('mongoose');
const conn = require('../database');
const { foxRule } = require('../rules');

const schemaOptions = {
  id: false,
  versionKey: false,
  autoIndex: false,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
};

const troopSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  countByLevel: [Object],
}, schemaOptions);

function getAttackByLevel(level) {
  return foxRule[`attackLevel${level}`] || 0;
}

function getDefenceByLevel(level) {
  return foxRule[`defenceLevel${level}`] || 0;
}

troopSchema.virtual('attack').get(function () {
  return this.countByLevel
    .map((item) => item.count * getAttackByLevel(item.level))
    .reduce(((a, b) => a + b), 0);
});

troopSchema.virtual('defence').get(function () {
  return this.countByLevel
    .map((item) => item.count * getDefenceByLevel(item.level))
    .reduce((a, b) => a + b, 0);
});

troopSchema.virtual('hp').get(function () {
  return this.countByLevel
    .map((item) => item.count)
    .reduce((a, b) => a + b, 0);
});

troopSchema.statics.createBasicTroops = async function (owner) {
  return this.create({
    owner,
    countByLevel: { level: 1, count: 1 },
  });
};

troopSchema.statics.createTroop = async function (owner, level) {
  const troop = await this.findOne({ owner });
  if (!troop) {
    return this.create({
      owner,
      countByLevel: [{
        level,
        count: 1,
      }],
    });
  }
  const index = troop.countByLevel.findIndex((element) => element.level === level);
  if (index !== -1) {
    troop.countByLevel[index].count += 1;
  } else {
    troop.countByLevel.push({
      level,
      count: 1,
    });
  }
  troop.markModified('countByLevel');
  return troop.save();
};

const TroopModel = conn.model('Troop', troopSchema);
module.exports = TroopModel;
