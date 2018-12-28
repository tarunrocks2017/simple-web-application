/* eslint-env mode, mocha, http, chai */
const request = require('supertest');

describe('ActorRoute', () => {
  it('should return Actor home page', (done) => {
    request('http://localhost:8080')
      .get('/workers')
      .expect(302)
      .expect(/Login/, done);
  });

  it('should return actor with id ', (done) => {
    request('http://localhost:8080')
      .get('/workers/1')
      .expect('Content-type', /text/)
      .expect(302)
      .expect(/Login/, done);
  });
});
