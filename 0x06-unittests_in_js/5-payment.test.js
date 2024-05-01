const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const assert = require('assert');
const sinon = require('sinon');

describe('test function behavior', () => {
    let consSpy;
    beforeEach(() => {
        consSpy = sinon.spy(console, 'log');
    });
    afterEach(() => {
        consSpy.restore();
    });

    it('test func 1 called once', () => {
        sendPaymentRequestToApi(100, 20);
        assert(consSpy.withArgs('The total is: 120').calledOnce);
    });

    it('test func 2 called once', () => {
        sendPaymentRequestToApi(10, 20);
        assert(consSpy.withArgs('The total is: 30').calledOnce);
    });
});
