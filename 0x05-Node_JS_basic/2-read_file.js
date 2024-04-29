// const fs = require('fs')
// const { parse } = require('csv-parse')


// function countStudents(file_path) {
//     const field = {};
//     let total = 0;

//     try {
//         fs.createReadStream(file_path)
//             .pipe(parse({ delimiter: ',', from_line: 2 }))
//             .on('data', function (row) {
//                 if (row[3] in field) {
//                     field[row[3]]['count'] += 1;
//                     total += 1;
//                     field[row[3]]['names'].push(row[0]);
//                 } else {
//                     field[row[3]] = { 'count': 1, 'names': [row[0]] };
//                     total += 1;
//                 }
//             }).on('error', function (error) {
//                 throw Error('Cannot load the database');
//             }).on("end", function () {
//                 process.stdout.write(`Number of students: ${total}\n`);
//                 Object.entries(field).forEach(([key, value]) => {
//                     process.stdout.write(`Number of students in ${key}: ${field[key]['count']}. List: ${field[key]['names'].join(', ')}\n`);
//                 })
//             });
//     } catch (err) {
//         throw Error('Cannot load the database');

//     }
// }
// module.exports = countStudents;
const fs = require('fs');
const { parse } = require('csv-parse');

function countStudents(file_path) {
    const field = {};
    let total = 0;

    const stream = fs.createReadStream(file_path);

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
        .on('error', function (error) {
            throw Error('Cannot load the database');
        })
        .on('end', function () {
            console.log(`Number of students: ${total}`);
            Object.entries(field).forEach(([key, value]) => {
                console.log(`Number of students in ${key}: ${field[key]['count']}. List: ${field[key]['names'].join(', ')}`);
            });
        });
}

module.exports = countStudents;
