const readline = require('node:readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

for (let i = 0; i < process.argv.length; i++) {
    rl.question(`Welcome to Holberton School, what is your name?\n`, name => {
        console.log(`Your name is: ${name}`);
        rl.close();
    });

}

if (!process.stdin.isTTY) {
    process.on('exit', function (code) {
        console.log('This important software is now closing');
    });
}

