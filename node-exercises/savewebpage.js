//Write a program to save a web page. 
//Prompt the user for a URL for the web page he wants to save, and for the filename to save to. 

// const https = require('https');
const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
});
const rp = require('request-promise');

rl.question('URL: ', (url) => {
    rp(url)
    .catch(function(err){
        console.log(err.message);
        return
    })
    .then(function(rawHTML){
        rl.question('Save to file: ', (filename) => {
            fs.writeFile(filename, rawHTML, (err) => {
                if (err) {
                    console.log(err.message);
                    return;
                }
                console.log('Saved to file' + filename);
            });
        rl.close();
        });  
    });
});






// const dns = require('dns');

// rl.question('URL: ', (url) => {
//     // dns.lookup(url, (err, address, family) => {
//     //     if (err) {
//     //         console.log(err.message);
//     //         return;
//     //     }
//     https.get(url, (err, res) => {
//         if (err) {
//             console.log(err.message);
//             return;
//         }
//         rl.question('Save to file: ', (filename) => {
//             fs.writeFile(filename, res, (err) => {
//                 if (err) {
//                     console.log(err.message);
//                     return;
//                 }
//                 console.log('Saved to file' + filename);
//             });
//         rl.close();
//         });
//     });
// });
