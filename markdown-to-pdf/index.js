const fs = require('fs');
const readline = require('readline');
const markdownpdf = require('markdown-pdf');
const rl = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
});

rl.question('What is the file name? ', (filename) => {
    console.log('You said: ' + filename);
    rl.close();
    fs.readFile(filename, (err, buffer) => {
        if (err) {
            console.log(err.message);
            return;
        }
    let content = buffer.toString();
    markdownpdf().from.string(content)
                 .to(filename + '.pdf', () => {
                    console.log('IT WORKED');
                 }) 
    
    //     console.log('You found it!');
    //     let content = buffer.toString();
    //     let upcased = content.toUpperCase();
    //     console.log(upcased);
    // });
    });
});
