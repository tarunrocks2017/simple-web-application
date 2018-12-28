const express = require('express');

const router = express.Router();

const actorController = require('./actorController');

const pageRedirecting = require('../../middlewareFunctions/middleWare');

router.use(pageRedirecting.pageRedirectingToLogin);

router.get('/', async (req, res) => {
  const actorInformation = await actorController.fetchActorsData();
  res.render('pages/workers', { isActive: req.session.isActive, ActorInformation: actorInformation });
});

router.get('/:id', async (req, res) => {
  const WorkerObj = await actorController.fetchActorDataById(req.params.id);
  if (WorkerObj.length === 0) res.render('pages/error', { msg: '500 id not found' });
  else res.render('pages/workers-info', { isActive: req.session.isActive, workerObj: WorkerObj });
});

module.exports = router;
