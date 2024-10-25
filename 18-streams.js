const { createReadStream } = require('fs');

const stream = createReadStream('./testFolder/big.txt', {highWaterMark : 90000, encoding : 'utf8'});

stream.on('data', (res) => {
    console.log(res);    // Reading the data in chunks (default : 64kb)
})

stream.on('error', (err) => {
    console.log(err);
})

// highWaterMark -> Controls size



// http example

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const fileStream = createReadStream('./testFolder/big.txt', 'utf8');
    fileStream.on('open', () => {  // from using this we can send file in chunks
        fileStream.pipe(res);
    })

    fileStream.on('error', (err) => {
        res.end(err);
    })
}).listen(5800); 

