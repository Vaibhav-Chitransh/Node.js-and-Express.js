const http = require('http');
const fs = require('fs');
const { config } = require('process');

const page = fs.readFileSync('./index.html');
const style = fs.readFileSync('./styles.css');
const logic = fs.readFileSync('./script.js');
const image = fs.readFileSync('./image.jpg');

// many if statements to write for loading each file

const server = http.createServer((req, res) => {
    const url = req.url;
    // console.log(url);

    if(url === '/') {
        res.writeHead(200, {'content-type' : 'text/html'});
        res.write(page);
        res.end();
    } else if(url === '/styles.css') {
        res.writeHead(200, {'content-type' : 'text/css'});
        res.write(style);
        res.end();
    } else if(url === '/image.jpg') {
        res.writeHead(200, {'content-type' : 'image/jpg'});
        res.write(image);
        res.end();
    } else if(url === '/script.js') {
        res.writeHead(200, {'content-type' : 'text/js'});
        res.write(logic);
        res.end();
    } else {
        res.writeHead(404, {'content-type' : 'text/html'});
        res.write(`<h1>Page not found</h1>`);
        res.end();
    }
})

server.listen(3200);