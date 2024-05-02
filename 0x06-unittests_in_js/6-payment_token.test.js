const getPaymentTokenFromAPI = require('./6-payment_token');
const {describe, it} = require("mocha");
const assert = require('assert');
const expect = require("chai").expect;

describe('test fetch api', () => {
    it('fetching api with promise', () => {
        getPaymentTokenFromAPI(true).then((data) => {
            // assert.equal(data.data, 'Successful response from the API');
            expect(data).to.have.property('data');
            done();
        });
    });
});