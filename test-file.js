/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
const expect = require('chai').expect;

const data = require('./index.js');

describe('data', () => {
  it('sum', () => {
    const result = data.sum(2, 3);
    const expected = 5;
    expect(result).equal(expected);
  });
});

