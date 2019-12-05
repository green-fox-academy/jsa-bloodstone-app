const express = require('express');

const app = express();
const PORT = 4000;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Hellow world');
});

app.use((err, req, res, next) => {
  res.status(500).send('Something broke!');
  next(err);
});

app.listen(PORT);
