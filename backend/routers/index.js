const express = require('express');

const app = express();
const PORT = 4000;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello world');
});

const myTroops = {
  troops: [
    {
      id: 1,
      level: 1,
      hp: 1,
      attack: 1,
      defence: 1,
      started_at: 12345789,
      finished_at: 12399999,
    }, {
      id: 2,
      level: 1,
      hp: 1,
      attack: 1,
      defence: 1,
      started_at: 12345789,
      finished_at: 12399999,
    },
  ],
};

app.get('/kingdom/troops', (req, res) => {
  res.status(200).send(myTroops);
});

app.use((err, req, res, next) => {
  res.status(500).send('Something broke!');
  next(err);
});

app.listen(PORT);
