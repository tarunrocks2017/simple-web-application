/* eslint-env mode, mocha, http, chai */
const Expect = require('chai').expect;

const userData = require('../source/User/Registration/RegistrationController');

describe('userData', () => {
  xit('should return saved user name ', async () => {
    const item = {
      email: 'test1288@gmail.com',
      username: 'testy123',
      userpassword: await userData.doHash('testy'),
    };
    const userArray = await userData.enterData(item);
    const result = userArray[0].username;
    const expected = 'testy123';
    Expect(result).equal(expected);
  });

  it('should return error msg for same user ', async () => {
    const item = {
      email: 'test124@gmail.com',
      username: 'testy',
      userpassword: await userData.doHash('testy'),
    };

    const result = await userData.enterData(item);
    const expected = 'duplicate user';

    Expect(result).equal(expected);
  });
});
