const { Schema } = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const conn = require('../database');

const schemaOptions = {
  versionKey: false,
  autoIndex: false,
};

const buildingSchema = new Schema({
  type: String,
  level: { type: Number, default: 1 },
  owner: Number,
}, schemaOptions);

buildingSchema.plugin(autoIncrement.plugin, { model: 'Building', field: 'id', startAt: 1 });

const BuildingModel = conn.model('Building', buildingSchema);
module.exports = BuildingModel;
