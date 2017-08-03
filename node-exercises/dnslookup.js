// Write a program that prompts the user for a domain name, 
// looks up the IP address for the domain, and prints it out


const readline = require('readline');
const rl = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
});
const dns = require('dns');

rl.question('Domain Name: ', (url) => {
    rl.close();
    dns.lookup(url, (err, address, family) => {
        if (err) {
            console.log(err.message);
            return;
        }
    console.log('IP Address ' + address);
    });
});
