const router = require('express').Router();

const Redirect = require('../../../middlewareFunctions/middleWare');

router.get('/', Redirect.RedirectLogin, (req, res) => {
  res.render('pages/Login', { isActive: req.session.isActive, msg: 'login redirecting', b: false });
});

module.exports = router;
