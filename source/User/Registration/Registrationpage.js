const router = require('express').Router();


router.get('/', (req, res) => {
  res.render('pages/registration', { isActive: req.session.isActive, b: false, errors: [''] });
});

module.exports = router;
