const request = require('request');
const {it, describe} = require("mocha");
const expect = require("chai").expect;

describe('index page', () => {
    const option = {
        url: 'http://localhost:7865/',
        method: 'GET',
    };
    it('testing status code 200', (done) => {
        request(option, (err, res) => {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });
    it('testing status code 404', (done) => {
        request(option, (err, res, body) => {
            expect(body).to.contain("Welcome to the payment system");
            done();
        });
    });
    it('testing body lenght', (done) => {
        request(option, (err, res) => {
              expect(res.headers['content-length']).to.equal('29');
              done();
        });
    });    
});

describe('cart testing', () => {
    it('testing status code 200', (done) => {
        request('http://localhost:7865/cart/12', (err, res) => {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });
    it('testing status code 404', (done) => {
        request('http://localhost:7865/cart/12', (err, res, body) => {
            expect(body).to.contain(`Payment methods for cart 12`);
            done();
        });
    });
    it('testing body lenght', (done) => {
        request('http://localhost:7865/cart/aString', (err, res) => {
            expect(res.statusCode).to.equal(404);
            done();
        });
    });
});
