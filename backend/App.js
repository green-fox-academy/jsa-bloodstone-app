const express = require('express');

const app = express();
const PORT = 4000;
const {
  troops, buildings, resources, notification,
} = require('./routers');

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

app.listen(PORT);

module.exports = app;
