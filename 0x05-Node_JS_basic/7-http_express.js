const express = require('express')

const app = express()
const port = 1245;
const fs = require('fs');
const { parse } = require('csv-parse');


async function countStudents(file_path) {
  const field = {};
  let total = 0;

  const stream = fs.createReadStream(file_path);

  return await new Promise((resolve, reject) => {
      stream
          .pipe(parse({ delimiter: ',', from_line: 2 }))
          .on('data', function (row) {
              if (row[3] in field) {
                  field[row[3]]['count'] += 1;
                  total += 1;
                  field[row[3]]['names'].push(row[0]);
              } else {
                  field[row[3]] = { 'count': 1, 'names': [row[0]] };
                  total += 1;
              }
          })
          .on('error', (error) => {
              reject(new Error("Custom error message"));
          })
          .on('end', function () {
              let str = `Number of students: ${total}\n`;
              Object.entries(field).forEach(([key, value]) => {
                  str += `Number of students in ${key}: ${field[key]['count']}. List: ${field[key]['names'].join(', ')}\n`;
              });
              resolve(str);
          });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!')
})

app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString())
            .then((output) => {
                const outString = output.slice(0, -1);
                res.send(outString)
            })
            .catch(() => {
                res.statusCode = 404;
                res.end('Cannot load the database');
            });
})

app.listen(port, () => {})

module.exports = app;