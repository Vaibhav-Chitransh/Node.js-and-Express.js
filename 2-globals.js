// GLOBALS -> NO WINDOW  

// __dirname -> path to current directory 
// __filename -> file name
// require -> function to use modules (CommonJS)
// module -> info about current module (file)
// process -> info about env where the program is being executed

// console.log(__dirname);
// console.log(__filename);
// console.log(require);
// console.log(module);
// console.log(process);

setInterval(() => {
    const date = new Date();

    let hrs = date.getHours();
    let minut = date.getMinutes();
    let sec = date.getSeconds();

    console.log(`Time is ->  ${hrs} : ${minut} : ${sec}`);
}, 1000);