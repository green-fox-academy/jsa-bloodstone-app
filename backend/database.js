const { createConnection } = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const DB_URI = process.env.DB_URI || 'mongodb://127.0.0.1/test';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};


const connection = createConnection(DB_URI, options);

autoIncrement.initialize(connection);

module.exports = connection;
