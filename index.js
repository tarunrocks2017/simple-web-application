const express = require('express');

const logger = require('./config/winston.js');

const app = express();


app.get('/', (req, res) => {
  res.send("it's good to see you");
});

app.listen(8080, () => {
  logger.log('info', 'request made');
});
