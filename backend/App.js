require('dotenv').config();
const express = require('express');
const {
  troops, buildings, resources, notification,
} = require('./routers');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello world');
});

app.use('/kingdom/troops', troops);
app.use('/kingdom/buildings', buildings);
app.use('/kingdom/resources', resources);
app.use('/notification', notification);

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
  next(err);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT);

module.exports = app;
