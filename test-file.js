/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
const expect = require('chai').expect;

const sqlData = require('./SqlFiles/sqlfile');

const sqlQuery = require('./SqlFiles/sqlqueries');

describe('data', () => {
  it('show match id object ', async () => {
    const result = await sqlData.fetchDataById(1, sqlQuery.SELECT_FROM_MOVIES);
    const expected = [{
      actorname: 'tarun',
      actorid: 1,
      moviename: 'IronMan',
      movieid: 1,
      status: 'superhit',
      releaseYear: 2009,
    },
    ];
    expect(result).deep.equal(expected);
  });

  it('should return data of table', async () => {
    const result = await sqlData.fetchData('movies', 'moviename', 'status', 'movieid');
    // eslint-disable-next-line no-console
    console.log(result);
    const expected = [{ movieid: 1, moviename: 'IronMan', status: 'superhit' }];
    expect(expected).eql(result);
  });
});
