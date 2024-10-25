const eventEmitter = require('events');

const customEmitter = new eventEmitter();

customEmitter.on('response', (name, age) => {
    console.log(`data received, user : ${name} having age : ${age}`);
})

customEmitter.on('response', () => {
    console.log('some other logic here');
})

customEmitter.emit('response', 'vaibhav', 20);  // can also pass arguments

// order matters that means first listen for the event then emit



// setup http using emitter

const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    res.end('Hello bro');
})

server.listen(4300);