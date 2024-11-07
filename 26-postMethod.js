const express = require('express');
const app = express();

const {people} = require('./data.js');

// adding static assets
app.use(express.static('./26-example'))

// parse form data
app.use(express.urlencoded({extended : false}));   // to get the form data

// parse json
app.use(express.json())

app.get('/api/people', (req, res) => {
    res.status(200).json({success : true, data : people});
})

app.post('/api/people', (req, res) => {
    const {name} = req.body; 

    if(!name) {
        return res.status(400).json({success : false, msg : 'Please provide name value'});
    }

    res.status(201).json({success : true, person : name});
})

app.post('/login', (req, res) => {
    // console.log(req.body);  
    const {name}= req.body;

    if(name) {
        return res.status(200).send(`Welcome, ${name}`);
    }

    return res.status(401).send('Please provide credentials');
})

app.listen(3000, () => {
    console.log('server is listening on port 3000...');
})