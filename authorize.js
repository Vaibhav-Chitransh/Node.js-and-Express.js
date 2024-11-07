const authorize = (req, res, next) => {
    const {user} = req.query;

    if(user === 'vaibhav') {
        req.user = {name : 'vaibhav', id : '3'};
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
}

module.exports = authorize;