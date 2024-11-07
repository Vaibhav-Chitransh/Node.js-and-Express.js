const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();

    console.log(method, url, time);

    // After this you have to pass this logic so either you pass it to next middleware terminate the whole cycle and use res.send()

    // res.send('Testing');   // shows testing on page

    next();   // shows Home Page on the page
}  

module.exports = logger;