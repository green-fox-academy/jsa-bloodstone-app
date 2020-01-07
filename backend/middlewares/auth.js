const jwt = require('jsonwebtoken');

async function auth(req, res, next) {
  const bearerHeader = req.headers.authorization;
  try {
    const token = bearerHeader.split(' ')[1];
    const { user } = jwt.verify(token, process.env.APP_SECRET || 'testSecret');
    req.user = user;
    next();
  } catch (error) {
    res.sendStatus(403);
  }
}

module.exports = auth;
