const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const assert = require('assert');
const sinon = require('sinon');

describe('test function behavior', () => {
    it('test func called once', () => {
        const consSpy = sinon.spy(console, 'log');
        const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
        sendPaymentRequestToApi(100, 20);
        assert(consSpy.withArgs('The total is: 10').calledOnce);
        assert(stub.withArgs('SUM', 100, 20).calledOnce);
    });
});