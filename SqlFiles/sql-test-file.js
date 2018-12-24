// eslint-disable-next-line prefer-destructuring
const expect = require('chai').expect;

const mocha = require('mocha');

const sqlData = require('./sqlfile');

describe('sqlData', () => {
  it('should return data of table', async () => {
    const result = await sqlData.fetchData('movies', 'moviename', 'image_url', 'movieid');
    const expected = [{ movieid: 1, moviename: 'IronMan', status: 'superhit' }];

    expect(expected).deep.equal(result);
  });
});
