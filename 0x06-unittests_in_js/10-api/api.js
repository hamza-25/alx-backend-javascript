const express = require('express');
const app = express();
const PORT = 7865

app.get('/', (req,res) => {
    res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req,res) => {
    const cartId = parseInt(req.params.id);
    res.send(`Payment methods for cart ${cartId}`);
});

app.get('/available_payments', (req, res) => {
    res.send({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
});

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.post('/login', (request, response) => {
    const name = request.body.userName;
    if(name){
        response.send(`Welcome ${name}`)
    }else{
        response.status(404).send();
    }
});

app.listen(PORT, () => {
    console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
