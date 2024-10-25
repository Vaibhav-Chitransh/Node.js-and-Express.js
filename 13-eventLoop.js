// First example

const fs = require('fs');

console.log('Starting the first task');

// This asynchronous operation will be executed after all the synchronous operations
fs.readFile('./testFolder/testSubFolder/test1.txt', 'utf8', (err, res) => {
    if(err) {
        console.log(err);
        return ;
    }

    console.log(res);
    console.log('First Task Completed');
})

console.log('Starting Next Task');


// Second example

console.log('First');

setTimeout(() => {
    console.log('Second');
}, 0);

console.log('Third');


// Third example

setInterval(() => {
    console.log('Hi Bro');
}, 5000);

console.log('I will run first');


// Fourth example

const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request event');
    res.end('WELCOME');
})

server.listen(4800, () => {
    console.log('Server listening on port : 4800');
})