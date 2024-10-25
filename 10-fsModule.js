const fs = require('fs');
// const {readFileSync, writeFileSync} = require('fs');   // Can get using destructuring as well

const test1 = fs.readFileSync('./testFolder/testSubFolder/test1.txt', 'utf-8');
const test2 = fs.readFileSync('./testFolder/test2.txt', 'utf-8');

console.log(test1);
console.log(test2);

fs.writeFileSync('./testFolder/result-sync.txt', `Here is the result : ${test1}, ${test2}`, {flag : 'a'});
// flag : 'a' means the file is appended as many times as you run



// Asynchronous approach -> When suppose the file or path is not present then you have to use callback

fs.readFile('./testFolder/test2.txt', 'utf8', (err, res) => {
    if(err) {
        console.log(err);
        return ;
    }

    console.log('Task completed');
});

fs.readFile('./testFolder/test2.txt', 'utf8', (err, res) => {
    if(err) {
        console.log(err);
        return ;
    }

    const test2 = res;
    console.log('Task 1 completed, starting next task');
    fs.readFile('./testFolder/testSubFolder/test1.txt', 'utf8', (err, res) => {
        if(err) {
            console.log(err);
            return ;
        }

        const test1 = res;
        console.log('Easy going');
        fs.writeFile('./testFolder/result-async.txt', `This is the result for async : ${test1}, ${test2}`, (err, res) => {
            if(err) {
                console.log(err);
                return ;
            }

            console.log('COMPLETE');
        })
    })
});


// How can we get rid of this callback hell in async approach, why can't we just put some console logs in sync approach

// If it is a synchronous approach then it goes line by line and imagine if some task is taking longer time then the next operations will be affected and delayed which cause your application crash 

// That's why it is better to use async approach because it uses callbacks (but it's a bit messy) 
// alternatives are using promises and async-await