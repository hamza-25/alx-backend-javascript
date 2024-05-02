const getPaymentTokenFromAPI = require('./6-payment_token');
const assert = require('assert');
// const { it, describe } = require('mocha');

describe('test fetch api', () => {
    it('fetching api with promise', (done) => {
        getPaymentTokenFromAPI(true).then((data) => {
            assert.equal(data, {data: 'Successful response from the API'});
            done();
        });
    });
});