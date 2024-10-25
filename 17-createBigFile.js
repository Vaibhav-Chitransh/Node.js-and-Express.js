const { writeFileSync } = require('fs');

for(let i=0; i<1000; i++) {
    writeFileSync('./testFolder/big.txt', `Hello friend ${i}\n`, {flag : 'a'})
}