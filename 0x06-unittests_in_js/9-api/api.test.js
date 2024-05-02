const request = require('request');
const {it, describe} = require("mocha");
// const assert = require('assert');
const expect = require("chai").expect;

describe('index page', () => {
    const option = {
        url: 'http://localhost:7865/',
        method: 'GET',
    };
    it('testing status code 200', (done) => {
        request(option, (err, res, body) => {
            // assert.equal(res.statusCode, 200);
            expect(res.statusCode).to.equal(200);
        });
        done();
    });
    it('testing status code 404', (done) => {
        request(option, (err, res, body) => {
            //   assert.equal(body, 'Welcome to the payment system');
            expect(body).to.contain("Welcome to the payment system");
        });
        done();
    });
    it('testing body lenght', (done) => {
        request(option, (err, res, body) => {
            //   assert.equal(res.headers['content-length'], 29);
              expect(res.headers['content-length']).to.equal('29');
        });
        done();
    });    
});

describe('cart testing', () => {
    it('testing status code 200', (done) => {
        request('http://localhost:7865/cart/12', (err, res, body) => {
            expect(res.statusCode).to.equal(200);
        });
        done();
    });
    it('testing status code 404', (done) => {
        request('http://localhost:7865/cart/12', (err, res, body) => {
            //   assert.equal(body, 'Welcome to the payment system');
            expect(body).to.contain(`Payment methods for cart 12`);
        });
        done();
    });
    it('testing body lenght', (done) => {
        request('http://localhost:7865/cart/aString', (err, res, body) => {
            //   assert.equal(res.headers['content-length'], 29);
            //   expect(res.headers['content-length']).to.equal('29');
            expect(res.statusCode).to.equal(404);
        });
        done();
    });

    
});