const { readFile } = require('fs');

function countStudents(filePath) {
  const students = {};
  const fields = {};
  let length = 0;
  return new Promise((resolve, reject) => {
    readFile(filePath, (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        const lines = data.toString().split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            length += 1;
            const field = lines[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }
            if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
              fields[field[3]] += 1;
            } else {
              fields[field[3]] = 1;
            }
          }
        }
        const l = length - 1;
        console.log(`Number of students: ${l}`);
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
          }
        }
        resolve(data);
      }
    });
  });
}

module.exports = countStudents;
// const fs = require('fs');
// const { parse } = require('csv-parse');

// async function countStudents(file_path) {
//     const field = {};
//     let total = 0;

//     const stream = fs.createReadStream(file_path);

//     await new Promise((resolve, reject) => {
//         stream
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
//             })
//             .on('error', (error) => {
//                 reject(new Error("Custom error message"));
//             })
//             .on('end', function () {
//                 resolve();
//             });
//     });

//     console.log(`Number of students: ${total}`);
//     Object.entries(field).forEach(([key, value]) => {
//         console.log(`Number of students in ${key}
// : ${field[key]['count']}. List: ${field[key]['names'].join(', ')}`);
//     });
// }

// module.exports = countStudents;
