const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('function that do SUM DIV and SUB', () => {
    it('should return addition numbers', () => {
        assert.strictEqual(calculateNumber('SUM', 4, 5), 9);
    });
    it('addition around numbers', () => {
        assert.strictEqual(calculateNumber('SUM', 1.6, 1.2), 3);
    });
    it('addition around numbers negative', () => {
        assert.strictEqual(calculateNumber('SUM', -1.6, -1.2), -3);
    });

    it('SUB around numbers', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 2, 1), 1);
    });
    it('SUB around floats', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 6.5, 2.2), 5);
    });
    it('SUB around floats negative', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', -6.7, -2.2), -5);
    });

    it('DIVIDE around integer', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 4, 2), 2);
    });
    it('DIVIDE around negative integer', () => {
        assert.strictEqual(calculateNumber('DIVIDE', -4, 2), -2);
    });
    it('DIVIDE by 0', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 4, 0), 'Error');
    });
    it('DIVIDE around floats', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 5.7, 1.8), 3);
    });


});