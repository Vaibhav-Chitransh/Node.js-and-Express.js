const express = require('express');
const app = express();

// middlware comes in between req and res
// req  ->  middleware  -> res

// const logger = (req, res, next) => {
//     const method = req.method;
//     const url = req.url;
//     const time = new Date().getFullYear();

//     console.log(method, url, time);

//     // After this you have to pass this logic so either you pass it to next middleware terminate the whole cycle and use res.send()

//     // res.send('Testing');   // shows testing on page

//     next();   // shows Home Page on the page
// }  

// Instead of writing this logger function here I can make separate file as well for this and then export from there

const logger = require('./logger.js');

app.use(logger);

// can also specify path while using middleware

// app.use('/api', logger);   
// Now it will only work for products and item page because only that has /api route in it (not work for home page and about page)
// order matters while using this app.use() middleware, if I write this middleware after this home page route then it will not work for home page route

app.get('/', (req, res) => {

    // const method = req.method;
    // const url = req.url;
    // const time = new Date().getFullYear();

    // console.log(method, url, time);

    // Now suppose I have to log this thing for every get request I have made and the number of these requests is 1000 then is it a good approach to do this one by one in all the 1000 
    // the alternative is -> set up a middleware function and pass in that request where I want to log this

    res.send('Home Page');
})

app.get('/about', (req, res) => { 
    res.send('About Page');
})

// app.get('/api/products', logger, (req, res) => {    // I can pass logger middleware function anwhere 
//     res.send('Product page');
// })

// Instead of passing logger function to every route instead I can use app.use

app.get('/api/products', (req, res) => {
    res.send('Product page');
})

app.get('/api/items', (req, res) => {
    res.send('Item page');
})

app.listen(4200, () => {
    console.log('Server is listening on port 4200...');
})