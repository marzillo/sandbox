const assert = require('assert');
const index = require('../index');

describe('The math module', () => {
  it('adds 2+2', () => {
    assert.equal(index(2, 2), 4, 'I expected 4');
  });
  it('adds 2+8', () => {
    assert.equal(index(2, 8), 10, 'I expected 10');
  });
});
