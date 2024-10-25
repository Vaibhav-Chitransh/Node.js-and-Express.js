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


// for setting up dev dependencies ->   npm i <packageName> -D
// example   ->   npm i nodemon -D

// dependencies ->  packages that are required for an application to run in production
// dev-dependencies -> tools only needed for development and testing


// uninstall a package   ->   npm uninstall <packageName>

// package.json ->
// The project's manifest that defines dependencies, scripts, and other high-level configurations. Developers can edit package.json to update dependencies, scripts, or configurations. 

// package-lock.json ->
// A lockfile that records the exact versions of dependencies and their installation paths. npm automatically manages package-lock.json to prevent conflicts and ensure consistent installation. 