const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello Holberton School!');
});

const PORT = 1245;
server.listen(PORT, () => {
    console.log('...');
});