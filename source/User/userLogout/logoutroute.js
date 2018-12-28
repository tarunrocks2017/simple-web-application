const router = require('express').Router();

router.get('/', (req, res) => {
  if (req.session.isActive) {
    req.session.isActive = false;
    res.redirect('/Login');
  }
});

module.exports = router;
