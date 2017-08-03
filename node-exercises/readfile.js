//Write a program that prompts the user to enter a file name, 
//and reads in the contents of the file, convert the text to all caps, and prints it out.


const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
});

rl.question('filename: ', (filename) => {
    rl.close();
    fs.readFile(filename, (err, buffer) => {
        if (err) {
            console.log(err.message);
            return;
        }
        let content = buffer.toString();
        let upcased = content.toUpperCase();
        console.log(upcased);
    });

});
