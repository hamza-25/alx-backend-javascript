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

describe('available_payments', () => {
    it('testing status code 200', (done) => {
        request('http://localhost:7865/available_payments', (err, res) => {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });
    it('testing response json', (done) => {
        const option = {json: true};
        const result = {
            payment_methods: {
              credit_cards: true,
              paypal: false
            }
          };
        request('http://localhost:7865/available_payments', option, (err, res, body) => {
            expect(body).to.deep.equal(result);
            done();
        });
    });
});

describe('test login', () => {
    it('testing status code 200', (done) => {
        const option = {
            url:'http://localhost:7865/login',
            json: true,
            body: {
                userName: 'Betty'
            }
        };
        request.post(option, (err, res) => {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    it('testing response json login', (done) => {
        const option = {
            url:'http://localhost:7865/login',
            json: true,
            body: {
                userName: 'Betty'
            }
        };
        request.post(option, (err, res, body) => {
            if (err) {
                done(err);
                return;
            }
            expect(res.statusCode).to.equal(200);
            expect(body).to.contain('Welcome Betty');
            done();
        });
    });

    it("not sent properly check correct status code", function(done) {
        const option = {
            url: "http://localhost:7865/login",
            json: true,
            body: {
            usame: 'Betty'
            }
        };
        request.post(option, function(err, res) {
            expect(res.statusCode).to.equal(404);
            done();
        });
        });
});

