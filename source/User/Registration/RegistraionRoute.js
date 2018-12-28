const router = require('express').Router();

const { check, validationResult } = require('express-validator/check');

const controller = require('./RegistrationController');
const checkUserfunction = require('../../../middlewareFunctions/middleWare');

router.post('/', checkUserfunction.checkUser, [
  check('email').isEmail(),
  check('username').isLength({ min: 5 }),
  check('password').isLength({ min: 5 }),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render('pages/registration', { b: true, errors: 'email is not coreect', isActive: false });
  }
  try {
    const item = {
      email: req.body.email,
      username: req.body.username,
      userpassword: await controller.doHash(req.body.password),
    };
    const name = await controller.enterData(item);
    return res.send(`saved successfully ${name[0].username}`);
  } catch (err) {
    return res.send('duplicate user');
  }
});

module.exports = router;
