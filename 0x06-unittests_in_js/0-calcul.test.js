const assert = require('assert');
const calculateNumber = require('./0-calcul');
// const { it, describe} = require('mocha');

describe('function that add two number', () => {
    it('should return addition numbers', () => {
        assert.strictEqual(calculateNumber(4, 5), 9);
    });
    it('around numbers', () => {
        assert.strictEqual(calculateNumber(1.6, 1.2), 3);
    });
    it('around numbers negative', () => {
        assert.strictEqual(calculateNumber(-1.6, -1.2), -3);
    });

});