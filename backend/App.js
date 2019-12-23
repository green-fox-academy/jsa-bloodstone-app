const express = require('express');

const app = express();
const PORT = 4000;
const {
  troops, buildings, resources, users,
} = require('./routers');

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello world');
});

app.use('/kingdom/troops', troops);
app.use('/kingdom/buildings', buildings);
app.use('/kingdom/resources', resources);
app.use('/users', users);

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
  next(err);
});

app.listen(PORT);

module.exports = app;
