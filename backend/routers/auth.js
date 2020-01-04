import jwt from 'jsonwebtoken';
const { Router } = require('express');

const router = Router();

const userA = {
  id: 0,
  username: 'aaa',
  email: 'aaa@gmail.com',
};

async function login(req, res, next) {
  try {
    const token = jwt.sign({ userA }, process.env.APP_SECRET);
    res.status(200).send(token);
  } catch (error) {
    next(error);
  }
}

async function auth(req, res, next) {
  const bearerHeader = req.header.authorization;
  const token = bearerHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.APP_SECRET);
  } catch {
    res.sendStatus(403);
    return;
  }
}
router.get('/', login);

module.exports = router;
