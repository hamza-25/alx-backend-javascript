const getPaymentTokenFromAPI = require('./6-payment_token');
const assert = require('assert');
const { it, describe } = require('mocha');

describe('test fetch api', function() {
    it('fetching api with promise', function() {
        getPaymentTokenFromAPI(true).then((data) => {
            assert.equal(data, {data: 'Successful response from the API'});
            done();
        });
    });
});