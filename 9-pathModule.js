const path = require('path');

console.log(path.sep);   // return \ which is path separator

const filePath = path.join('/testFolder', 'testSubFolder', 'test1.txt');   // Joins the path using separator
console.log(filePath);

const filePath2 = path.join('/testFolder/', '/testSubFolder/', '/test1.txt');   // The redundant / will be removed
console.log(filePath2);  

const base = path.basename(filePath);   // Gives the base file that is test.txt
console.log(base);

const absolute = path.resolve(__dirname, 'testFolder', 'testSubFolder', 'test1.txt');  // Gives the absolute path of the file
console.log(absolute);