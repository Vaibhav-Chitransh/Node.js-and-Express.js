const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Home page');
    }
    
    else if(req.url === '/about') {
        // Blocking code
        for(let i=0; i<1000; i++) {
            for(let j=0; j<1000; j++) {
                console.log(`${i} ${j}`);
            }
        }  // about Page will be loaded till this operation completes 

        res.end('About Page');
    }

    else {
        res.end('Error !! Page not found');
    }
})

server.listen(3400, () => {
    console.log('Server is listening on port 3400....');
})