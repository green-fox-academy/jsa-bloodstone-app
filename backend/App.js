require('dotenv').config();
const express = require('express');
const { troops, buildings, resources } = require('./routers');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).send('Hello world');
});

app.use('/kingdom/troops', troops);
app.use('/kingdom/buildings', buildings);
app.use('/kingdom/resources', resources);

app.use((err, req, res, next) => {
  res.status(500).send('Something broke!');
  next(err);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT);

module.exports = app;
