/* eslint-env mode, mocha, http, chai */
const Expect = require('chai').expect;

const loginController = require('../source/User/userLogin/LoginController');

describe('login', () => {
  it('should return login status of user', async () => {
    const email = 'good@mountblue.io';
    const pass = 'mount';

    const result = await loginController.UserExist(email, pass);
    const expected = true;

    Expect(result).equals(expected);
  });

  it('should return false for invalid user', async () => {
    const email = 'good@mountblue.io';
    const pass = 'itsme';

    const result = await loginController.UserExist(email, pass);
    const expected = false;

    Expect(result).equals(expected);
  });
});
