require('dotenv').config();
const express = require('express');
const {
  users, setup, troops, buildings, resources, notification, progresses,
} = require('./routers');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).send('Hello world');
});

app.use('/kingdom/troops', troops);
app.use('/kingdom/buildings', buildings);
app.use('/kingdom/resources', resources);
app.use('/kingdom/progresses', progresses);
app.use('/notification', notification);
app.use('/users', users);
app.use('/kingdom/register', setup);

app.use((err, req, res, next) => {
  const { status, message } = err;
  if (process.env.NODE_ENV !== 'production') {
    next(err.message);
  }
  if (status) {
    return res.status(status).json({ status, message });
  }
  return res.sendStatus(500);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT);

module.exports = app;
