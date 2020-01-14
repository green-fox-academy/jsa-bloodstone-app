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

module.exports = conn.model('User', userSchema);
