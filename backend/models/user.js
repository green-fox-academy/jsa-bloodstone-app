const { Schema } = require('mongoose');
const conn = require('../database');

const schemaOptions = {
  versionKey: false,
  autoIndex: false,
};

const userSchema = new Schema({
  email: String,
  username: String,
  password: String,
  kingdomName: String,
  planetList: [String],
  troop: { type: Schema.Types.ObjectId, ref: 'Troop' },
}, schemaOptions);

userSchema.methods.addPlanet = function addPlanet(planet) {
  this.planetList = [...new Set([...this.planetList, planet])];
};

module.exports = conn.model('User', userSchema);
