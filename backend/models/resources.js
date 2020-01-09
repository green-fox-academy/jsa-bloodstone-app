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
  generation: { type: Number, default: 60 },
  updatedAt: Number,
}, schemaOptions);

resourceSchema.virtual('amount').get(function () {
  const date = new Date();
  const minutesPassed = (date.getTime() - this.updatedAt) / 60000;
  return Math.round(this.initialAmount + this.generation * minutesPassed);
});

resourceSchema.statics.purchaseItem = async function (owner, priceOfItem) {
  const currentAmountOfGoal = await this.findOne({ owner, type: 'gold' });
  if (!currentAmountOfGoal){
    return false;
  }
  //console.log(currentAmountOfGoal);
  if (currentAmountOfGoal.amount < priceOfItem) {
    return false;
  }
  currentAmountOfGoal.initialAmount -= priceOfItem;
  await currentAmountOfGoal.save();
  //console.log(currentAmountOfGoal);
  return true;
}

module.exports = conn.model('Resource', resourceSchema);
