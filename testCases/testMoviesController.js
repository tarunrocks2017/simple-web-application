/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
const expect = require('chai').expect;

const sqlData = require('../source/movies/movieController');

describe('data', () => {
  it('show match id object ', async () => {
    const result = await sqlData.fetchMovieDataById(1);
    const expected = [{
      actorname: 'Robert Downey',
      actorid: 1,
      moviename: 'IronMan',
      movieid: 1,
      status: 'superhit',
      image_url: '/iron-man.jpg',
      description: 'Iron Man is a 2008 American superhero film based on the Marvel Comicscharacter of the same name, produced by Marvel Studios and distributed by Paramount',
      releaseYear: 2009,
    },
    ];
    expect(result).deep.equal(expected);
  });

  it('should return data of table', async () => {
    const result = await sqlData.fetchMovieData();
    // eslint-disable-next-line no-console
    console.log(result);
    const expected = [{
      image_url: '/iron-man.jpg', movieid: 1, moviename: 'IronMan',
    }];
    expect(expected).eql(result);
  });
});
