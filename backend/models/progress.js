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

const progressSchema = new Schema({
  owner: Number,
  category: String,
  type: String,
  toLevel: Number,
  startAt: Number,
  finishAt: Number,
}, schemaOptions);

progressSchema.virtual('isUpgrade').get(function () {
  return this.toLevel > 1;
});

progressSchema.virtual('isFinished').get(function () {
  const date = new Date();
  return date.getTime() - this.finishAt > 0;
});

module.exports = conn.model('Progress', progressSchema);
