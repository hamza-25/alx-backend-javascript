const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const assert = require('assert');
const sinon = require('sinon');

describe('test function behavior', () => {
    it('test func called once', () => {
        const calculateNumber = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(2, 3);
        assert(calculateNumber.calledOnce);
        calculateNumber.restore()
    });
});