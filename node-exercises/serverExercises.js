
const fs = require('fs');
const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.url);
    let url = req.url.slice(1);
   // fs.readFile('blah.html', (err, buffer) => {
       fs.readFile(url, (err, buffer) => {
        if(err) {
            res.end();
            return;
        }
        res.end(buffer.toString());
    })
});
server.listen(8888, () => {
    console.log("server 8888 running");
});