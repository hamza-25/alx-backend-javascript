const assert = require('assert');
const calculateNumber = require('./0-calcul');
const { it, describe} = require('mocha');

describe('function that add two number', () => {
    it('should return addition numbers', () => {
        assert.equal(calculateNumber(4, 5), 9);
    });
});