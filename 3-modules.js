// Modules - Encapsulated Code (only share minimum)
// CommonJS, every file is module (by default)

// const names = require('./4-firstModule');   // Gives object
const {vaibhav, bruce, tony} = require('./4-firstModule');
const sayHi = require('./5-secondModule');
// console.log(names);

const data = require('./6-thirdModule');

// If you require by using object you can use names.bruce  and   names.tony   and   names.vaibhav
sayHi(vaibhav);
sayHi(bruce);
sayHi(tony);

console.log(data);

require('./7-fourthModule');    // You can directly invoke if a function is executed over there