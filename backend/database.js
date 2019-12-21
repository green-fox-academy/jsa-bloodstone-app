const { connect, connection } = require('mongoose');

const DB_URI = process.env.DB_URL || 'mongodb://127.0.0.1/test';
const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

connect(DB_URI, config);

module.exports = connection;
