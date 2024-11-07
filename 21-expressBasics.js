const express = require('express');
const app = express();

// Can also set up like ->    const app = require('express')();

app.get('/', (req, res) => {
    res.status(200).send('Home Page');
})

app.get('/about', (req, res) => {
    res.status(200).send('About Page');
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>Page not Found</h1>');
})

app.listen(3200, () => {
    console.log('Server is listening on port 3200...');
})