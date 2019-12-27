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
  owner: Number,
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
    .reduce((a, b) => a + b);
});

troopSchema.virtual('defence').get(function () {
  return this.countByLevel
    .map((item) => item.count * getDefenceByLevel(item.level))
    .reduce((a, b) => a + b);
});

troopSchema.virtual('hp').get(function () {
  return this.countByLevel
    .map((item) => item.count)
    .reduce((a, b) => a + b);
});

const TroopModel = conn.model('Troop', troopSchema);
module.exports = TroopModel;
