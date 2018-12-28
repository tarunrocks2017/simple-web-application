/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
const expect = require('chai').expect;

const sqlData = require('../source/actors/actorController');

describe('data', () => {
  it('show match id object ', async () => {
    const result = await sqlData.fetchActorDataById(1);
    const expected = [{
      moviename: 'IronMan',
      movieid: 1,
      actorname: 'Robert Downey',
      activeyear: '2007-2018',
      totalmovies: 350,
      image_url: '/robert.jpg',
      description: 'Robert John Downey Jr. (born April 4, 1965)[2] is an American actor and singer. His career has included critical and popular success in his youth, followed by a period of substance abuse and legal difficulties, and a resurgence of commercial success in middle age ',
      awards: 'Academy Award for Best Actor,best avenger award',
    }];
    expect(result).deep.equal(expected);
  });

  it('should return data of table', async () => {
    const result = await sqlData.fetchActorsData();
    // eslint-disable-next-line no-console
    console.log(result);
    const expected = [{
      image_url: '/robert.jpg', actorid: 1, actorname: 'Robert Downey',
    }];
    expect(expected).eql(result);
  });
});
