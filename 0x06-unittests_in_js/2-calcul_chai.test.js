const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('function that do SUM DIV and SUB', () => {
    it('should return addition numbers', () => {
        expect(calculateNumber('SUM', 4, 5)).to.equal(9);
    });
    it('addition around numbers', () => {
        expect(calculateNumber('SUM', 1.6, 1.2)).to.equal(3);
    });
    it('addition around numbers negative', () => {
        expect(calculateNumber('SUM', -1.6, -1.2)).to.equal(-3);
    });

    it('SUB around numbers', () => {
        expect(calculateNumber('SUBTRACT', 2, 1)).to.equal(1);
    });
    it('SUB around floats', () => {
        expect(calculateNumber('SUBTRACT', 6.5, 2.2)).to.equal(5);

    });
    it('SUB around floats negative', () => {
        expect(calculateNumber('SUBTRACT', -6.7, -2.2)).to.equal(-5);

    });

    it('DIVIDE around integer', () => {
        expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
    });
    it('DIVIDE around negative integer', () => {
        expect(calculateNumber('DIVIDE', -4, 2)).to.equal(-2);
    });
    it('DIVIDE by 0', () => {
        expect(calculateNumber('DIVIDE', 4, 0)).to.equal('Error');
    });
    it('DIVIDE around floats', () => {
        expect(calculateNumber('DIVIDE', 5.7, 1.8)).to.equal(3);
    });


});