const getPaymentTokenFromAPI = require('./6-payment_token');
const { it, describe } = require('mocha');
const expect = require("chai").expect;


describe('test fetch api', () => {
    it('fetching api with promise', (done) => {
        getPaymentTokenFromAPI(true).then((data) => {
            expect(data).to.have.property('data');
            done();
        });
    });
});
