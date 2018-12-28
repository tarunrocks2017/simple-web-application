const express = require('express');

const router = express.Router();

const movieController = require('./movieController');

const pageRedirecting = require('../../middlewareFunctions/middleWare');

router.use(pageRedirecting.pageRedirectingToLogin);

router.get('/', async (req, res) => {
  try {
    const MovieInfo = await movieController.fetchMovieData();
    res.render('pages/movies', { isActive: req.session.isActive, movieInfo: MovieInfo });
  } catch (err) {
    throw err;
  }
});
router.get('/:id', async (req, res) => {
  try {
    const Obj = await movieController.fetchMovieDataById(req.params.id);
    console.log(Obj);
    if (Obj.length === 0) res.status(500).render('pages/error', { msg: '500 id not found' });
    res.render('pages/movie-info', {
      isActive: req.session.isActive, obj: Obj[0], msg: 'this is movie', rating: Obj[1],
    });
  } catch (error) {
    throw error;
  }
});

module.exports = router;
