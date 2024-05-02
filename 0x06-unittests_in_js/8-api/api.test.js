const request = require('request');
const chai = require('chai');
const {describe, it} = require("mocha");
const assert = require('assert');

describe('index page', () => {
    const option = {
        url: 'http://localhost:7865/',
        method: 'GET',
    };
    it('testing status code', (done) => {
        const req = request(option, (err, res, body) => {
            assert.equal(res.statusCode, 200);
        });
        done();
    });
    it('testing body', (done) => {
        const req = request(option, (err, res, body) => {
              assert.equal(body, 'Welcome to the payment system');
        });
        done();
    });
    it('testing body lenght', (done) => {
        const req = request(option, (err, res, body) => {
              assert.equal(res.headers['content-length'], 29);
        });
        done();
    });
});