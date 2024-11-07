const http = require('http');
const fs = require('fs');

const homePage = fs.readFileSync('./home.html');

const server = http.createServer((req, res) => {
    // console.log(req.method);  // GET
    // console.log(req.url);
    // res.writeHead(200, {'content-type' : 'text/html'});  // if I write text/plain then the it will be treated as a plain simple text and 200 is the status code
    // res.write(`<h1>Home page</h1>`);
    // res.end();

    const url = req.url;

    if(url === '/') {
        res.writeHead(200, {'content-type' : 'text/html'});
        res.write(homePage);
        res.end();
    } else if(url === '/about') {
        res.writeHead(200, {'content-type' : 'text/html'});
        res.write(`<h1>About Page</h1>`)
        res.end();
    } else {
        res.writeHead(404, {'content-type' : 'text/html'});
        res.write(`<h1>Page not found</h1>`)
        res.end();
    }
})

server.listen(3000);