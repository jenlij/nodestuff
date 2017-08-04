const ws = require('ws');
const server = new ws.Server({port: 8081});

server.on('connection', (socket) => {
    console.log('Someone connected');
    socket.on('message', (msg) => {
        console.log('They said: ', msg);
        socket.send('What is your message? ');
    });
});

//npm init -y
//npm install -g wscat

// wscat -c ws://localhost:8081