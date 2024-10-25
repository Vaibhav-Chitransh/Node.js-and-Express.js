const fs = require('fs');

const getText = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, res) => {
            if(err) {
                reject(err);
            } else {
                resolve(res);
            }
        })
    })
}

// alternative way using node util

const util = require('util');
const readFilePromise = util.promisify(fs.readFile);

getText('./testFolder/testSubFolder/test1.txt').then((res) => console.log(res)).catch((err) => console.log(err));



// async await approach

const start = async () => {
    try {
        const first = await getText('./testFolder/testSubFolder/test1.txt');
        const second = await readFilePromise('./testFolder/test2.txt', 'utf8');
        console.log(first, second);
    } 

    catch(err) {
        console.log(err);
    }
}

start();