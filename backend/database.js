const { createConnection } = require('mongoose');

const DB_URI = process.env.DB_URI || 'mongodb://127.0.0.1/test';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

module.exports = createConnection(DB_URI, options);
