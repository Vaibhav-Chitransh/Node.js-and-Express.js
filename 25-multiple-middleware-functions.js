const express = require('express');
const app = express();

const logger = require('./logger.js');
const authorize = require('./authorize.js');

// can pass multiple middleware functions 
app.use([logger, authorize]); // first passing logger then authorize (if I change the order then execution will be reversed)

app.get('/', (req, res) => {
    res.send('Home');
})

app.get('/about', (req, res) => {
    res.send('About');
})

app.get('/api/products', (req, res) => {
    res.send('Product');
})

// app.get('/api/items', [logger, authorize], (req, res) => {  // manually passing middleware to the specific route
//     console.log(req.user);
//     res.send('Item');
// })

app.get('/api/items', (req, res) => {
    console.log(req.user);
    res.send('Item');
})

app.listen(3000, () => {
    console.log('server is listening on port 3000...');
})