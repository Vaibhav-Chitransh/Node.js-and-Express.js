const express = require('express');
const app = express();

const {products} = require('./data.js');

app.get('/', (req, res) => {
    res.send('<h1>Home page</h1><a href="/api/products">Products</a>')
})

app.get('/api/products', (req, res) => {
    const newProd = products.map((prod) => {   // Sending product without product description
        const {id, name, image} = prod;
        return {id, name, image};
    })

    res.json(newProd);
})

// If I want to see a specific product let say product having id = 1 (and also now I want to show the desc)

// app.get('/api/products/1', (req, res) => {
//     // res.send(products[0]);
//     const singleProd = products.find((prod) => prod.id === 1);
//     res.json(singleProd);
// }) 

// But suppose I have 1000 products then it is not a good way to write routes for all 1000 of them one by one

// Instead I can use route parameter

app.get('/api/products/:prodId', (req, res) => {
    // console.log(req);
    // console.log(req.params);   // can get the parameter
    const {prodId} = req.params;  // gives in string format
    const singleProd = products.find((prod) => prod.id === Number(prodId));

    // If can't find the product 
    if(!singleProd) {
        return res.status(404).send('<h1>Product not Found</h1>')
    }

    return res.json(singleProd);
})


// Params can be way more complex as well 
app.get('/api/products/:prodId/reviews/:reviewId', (req, res) => {
    console.log(req.params);
    res.send('Hello');
})


// Now using Query String

app.get('/api/v1/query', (req, res) => {
    // can acces in web using http://localhost:3000/api/v1/query?name=vaibhav&id=5
    // you can add as many query parameters as you want  http://localhost:3000/api/v1/query?search=a&limit=2

    console.log(req.query);

    const {search, limit} = req.query;
    let sortedProd = [...products];

    if(search) {
        sortedProd = sortedProd.filter((prod) => {
            return prod.name.startsWith(search);
        })
    }

    if(limit) {
        sortedProd = sortedProd.slice(0, Number(limit));
    }

    if(sortedProd.length < 1) {
        return res.status(200).send({success : true, data : []});   // I can send anything I want
    }

    res.status(200).json(sortedProd);
    // res.send('Hello World');
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000...');
})