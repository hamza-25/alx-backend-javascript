const request = require('request');
// const chai = require('chai');
const {describe, it} = require("mocha");
const assert = require('assert');

describe('index page', () => {
    const option = {
        url: 'http://localhost:7865/',
        method: 'GET',
    };
    it('testing status code', (done) => {
        request(option, (res) => {
            assert.equal(res.statusCode, 200);
        });
        done();
    });
    it('testing body', (done) => {
        request(option, (body) => {
              assert.equal(body, 'Welcome to the payment system');
        });
        done();
    });
    it('testing body lenght', (done) => {
        request(option, (res) => {
              assert.equal(res.headers['content-length'], 29);
        });
        done();
    });
});