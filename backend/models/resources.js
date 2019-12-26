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
  owner: Number,
  type: String,
  initialAmount: Number,
  generation: Number,
  updatedAt: Number,
}, schemaOptions);

resourceSchema.virtual('amount').get(function () {
  const date = new Date();
  const minutesPassed = (date.getTime() - this.updatedAt) / 60000;
  return Math.round(this.initialAmount + this.generation * minutesPassed);
});

module.exports = conn.model('Resource', resourceSchema);
