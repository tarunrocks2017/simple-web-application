const router = require('express').Router();

const { check, validationResult } = require('express-validator/check');

const loginController = require('./LoginController');


router.post('/', [check('email').isEmail()], async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(422).render('pages/Login', { b: true, errors: 'email or password wrong', isActive: true });
  }

  const exist = await loginController.UserExist(req.body.email, req.body.password);
  if (exist) {
    req.session.isActive = true;
    res.redirect('/');
  } else {
    res.send('login fail');
  }
});

module.exports = router;
