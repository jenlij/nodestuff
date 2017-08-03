/*
Write a program to prompt the user for two file names, 
the first file will be the input and the second file will be the output. 
The program will read in the contents of the input file, convert its text to all caps, 
and then write the resulting contents to the output file.
*/

const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
});

rl.question('Input file: ', (filename) => {
    fs.readFile(filename, (err, buffer) => {
        if (err) {
            console.log(err.message);
            rl.close();
            return;
        }
        let content = buffer.toString(); 
        rl.question('Output file: ', (filename) => {
            fs.writeFile(filename, content, (err) => {
                if (err) {
                    console.log(err.message);
                    return;
                }
                console.log('Wrote to output');
            });
        rl.close();
        });
    });  
});
