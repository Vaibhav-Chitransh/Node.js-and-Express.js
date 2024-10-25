// npm -v      // To check if npm is installed or not

// local dependency -> use it in this particular project
// npm i <packageName>

// global dependency -> use it in any project
// npm i -g <packageName>

// package.json   ->   manifest file (stores important info about project/package)
// manual approach ->  create package.json in the root, create properties, etc
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash');

const items = [1, [2, 3, [4]]];
const newItems = _.flattenDeep(items);

console.log(newItems);