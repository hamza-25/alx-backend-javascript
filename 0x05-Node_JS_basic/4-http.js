const http = require('http');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

const PORT = 1245;
const HOST = '127.0.0.1';

app.listen(PORT, HOST, () => {});

module.exports = app;
