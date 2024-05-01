const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping){
    const sum = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    return sum;
    console.log(`The total is: ${sum}`);
}

module.exports = sendPaymentRequestToApi;