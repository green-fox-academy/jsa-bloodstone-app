const { Schema } = require('mongoose');
const conn = require('../database');

const schemaOptions = {
  versionKey: false,
  autoIndex: false,
};

const userSchema = new Schema({
  id: Number,
  email: String,
  username: String,
  kingdomName: String,
  kingdomList: [Number],
}, schemaOptions);

module.exports = conn.model('User', userSchema);
