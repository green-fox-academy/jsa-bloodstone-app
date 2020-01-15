/* eslint func-names: ["error", "never"] */
const { Schema } = require('mongoose');
const conn = require('../database');

const schemaOptions = {
  id: false,
  versionKey: false,
  autoIndex: false,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
};

const resourceSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  type: String,
  initialAmount: { type: Number, default: 200 },
  generation: { type: Number, default: 10 },
  updatedAt: Number,
}, schemaOptions);

resourceSchema.virtual('amount').get(function () {
  const date = new Date();
  const minutesPassed = (date.getTime() - this.updatedAt) / 60000;
  return Math.round(this.initialAmount + this.generation * minutesPassed);
});

resourceSchema.statics.createBasicResources = async function (owner) {
  const currentTime = new Date().getTime();
  return this.create(
    { owner, type: 'food', updatedAt: currentTime },
    { owner, type: 'gold', updatedAt: currentTime },
  );
};

resourceSchema.statics.checkIfHasEnoughGold = async function (owner, priceOfItem) {
  const currentAmountOfGold = await this.findOne({ owner, type: 'gold' });
  return currentAmountOfGold && currentAmountOfGold.amount >= priceOfItem;
};

resourceSchema.statics.reduceGold = async function (owner, amount) {
  const currentAmountOfGold = await this.findOne({ owner, type: 'gold' });
  currentAmountOfGold.initialAmount -= amount;
  await currentAmountOfGold.save();
};

module.exports = conn.model('Resource', resourceSchema);
