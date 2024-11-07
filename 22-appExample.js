const express = require('express');
const app = express();

const path = require('path');

// setup static and middleware
app.use(express.static('./public'));   // way easier than using http and passing all files one by one

// app.get('/', (req, res) => { 
//     res.sendFile(path.join(__dirname, './20-example/index.html'));
// })  // can also pass index.html in public folder so no need to use sendFile option

app.all('*', (req, res) => {
    res.send('<h1>Page not Found</h1>')
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000...');
})