const express = require('express');

const path = require('path');

require('dotenv').config();

const logger = require('./config/winston.js');

const fileName = path.basename('/home/tarun/Documents/MountBlueProjects/06-web-application/views/public');

const data = require('./Service');

const app = express();


app.set('view engine', 'ejs');

app.use(express.static(`${fileName}/images`));
app.use(express.static(`${fileName}/css-files`));

const middleware = (req, res, next) => {
  logger.log('info', `${req.url} requested`);
  next();
};

app.get('/Home', middleware, (req, res) => {
  res.render('pages/Home');
});

app.get('/Actors', (req, res) => {
  res.render('pages/Actors');
});


app.get('/movies', async (req, res) => {
  const movieInfo = await data.getMovies();
  res.render('pages/movies', { movieInfo });
});

app.get('/movies/:id', async (req, res) => {
  try {
    const obj = await data.getMovieById(req.params.id);
    if (obj.length === 0) res.status(500).render('pages/error', { msg: '500 id not found' });
    res.render('pages/movie-info', { obj });
  } catch (error) {
    res.sendStatus(500);
  }
});

app.get('/workers', async (req, res) => {
  try {
    const ActorInformation = await data.getActors();
    res.render('pages/workers', { ActorInformation });
  } catch (error) {
    res.status(400).render('pages/error');
  }
});

app.get('/workers/:id', async (req, res) => {
  const workerObj = await data.getActorById(req.params.id);
  if (workerObj.length === 0) res.render('pages/error', { msg: '500 id not found' });
  else res.render('pages/workers-info', { workerObj });
});

app.get('*', middleware, (req, res) => {
  res.status(400).render('pages/error', { msg: '404 page not found . think you are sending wrong request' });
});

app.listen(8080, () => {
  logger.log('info', 'requested');
});
