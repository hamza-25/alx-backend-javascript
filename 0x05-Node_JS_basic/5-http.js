const http = require('http');
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

const app = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello Holberton School!');
    }
    if (url === '/students') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.write('This is the list of our students\n');
        countStudents(process.argv[2].toString())
            .then((output) => {
                const outString = output.slice(0, -1);
                res.end(outString);
            })
            .catch(() => {
                res.statusCode = 404;
                res.end('Cannot load the database');
            });

    }

});

const PORT = 1245;
const HOST = '127.0.0.1';

app.listen(PORT, HOST, () => { });

module.exports = app;