const assert = require('assert');
const sum = require('./0-calcul');

describe('function that add two number', () => {
    it('should return addition numbers', () => {
        assert.equal(sum(4, 5), 9);
    });
});