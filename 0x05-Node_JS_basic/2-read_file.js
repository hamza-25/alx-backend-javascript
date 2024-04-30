const fs = require('fs');

function countStudents(filePath) {
  const students = {};
  const fields = {};
  let total = 0;
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.toString().split('\n');
    for (let i = 0; i < lines.total; i += 1) {
      if (lines[i]) {
        total += 1;
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
    const l = total - 1;
    console.log(`Number of students: ${l}`);
    for (const [key, value] of Object.entries(fields)) {
      if (key !== 'field') {
        console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
// const fs = require('fs');
// const { parse } = require('csv-parse');

// function countStudents(filePath) {
//   const field = {};
//   let total = 0;

//   const stream = fs.createReadStream(filePath);

//   stream
//     .pipe(parse({ delimiter: ',', from_line: 2 }))
//     .on('data', (row) => {
//       if (row[3] in field) {
//         field[row[3]].count += 1;
//         total += 1;
//         field[row[3]].names.push(row[0]);
//       } else {
//         field[row[3]] = { count: 1, names: [row[0]] };
//         total += 1;
//       }
//     })
//     .on('error', () => { // error
//       throw Error('Custom error message');
//     })
//     .on('end', () => {
//       console.log(`Number of students: ${total}`);
//       Object.entries(field).forEach(([key]) => { // value
//         console.log(`Number of students in ${key}
// : ${field[key].count}. List: ${field[key].names.join(', ')}`);
//       });
//     });
// }

// module.exports = countStudents;
