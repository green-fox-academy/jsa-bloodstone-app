const jwt = require('jsonwebtoken');

const { Router } = require('express');

const router = Router();

const userA = {
  id: 0,
  username: 'aaa',
  email: 'aaa@gmail.com',
};

async function login(req, res) {
  const token = jwt.sign({ userA }, process.env.APP_SECRET);
  res.status(200).send({ token });
}

async function testProtected(req, res) {
  res.status(200).send('protected');
}

async function auth(req, res, next) {
  const bearerHeader = req.headers.authorization;
  try {
    const token = bearerHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.APP_SECRET);
    req.decoded = decoded;
    next();
  } catch (error) {
    res.sendStatus(403);
  }
}

router.get('/login', login);
router.get('/testProtected', auth, testProtected);

module.exports = router;
