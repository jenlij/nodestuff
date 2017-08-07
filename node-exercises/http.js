//local server stuff
const http = require('http');
const server = http.createServer((req, res) => {
    res.end('<h1>Headerrrrr</h1>');
});
server.listen(8888);