const getPaymentTokenFromAPI = require('./6-payment_token');
const assert = require('assert');

describe('test fetch api', () => {
    it('fetching api with promise', () => {
        getPaymentTokenFromAPI(true).then((data) => {
            assert.equal(data, {data: 'Successful response from the API' });
            done();
        })
    });
});