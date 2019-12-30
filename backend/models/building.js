const { Schema } = require('mongoose');
const conn = require('../database');

const schemaOptions = {
  versionKey: false,
  autoIndex: false,
};

const buildingSchema = new Schema({
  id: Number,
  type: String,
  level: Number,
  owner: Number,
}, schemaOptions);

const BuildingModel = conn.model('Building', buildingSchema);
module.exports = BuildingModel;
