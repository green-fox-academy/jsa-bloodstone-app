const express = require('express');

const app = express();
const PORT = 4000;
const { troops, buildings } = require('./routers');

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello world');
});

app.use('/kingdom', troops);
app.use('/kingdom/buildings', buildings);

app.use((err, req, res, next) => {
  res.status(500).send('Something broke!');
  next(err);
});

app.listen(PORT);

module.exports = app;
