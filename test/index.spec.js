const assert = require('assert');
const index = require('../index');

describe('my test', () => {
    it('math works', () => {
        assert.equal(index(2,2),4,'I expected 4');
    });
});