const jwt = require('jsonwebtoken');

const authenticate = (req,res, next)=>{
    try {
        const {token} =req.headers;
        const decode = jwt.verify(token, 'secretcode');
        if(decode){
            req.headers.user = decode;
            next();
        }else{
            res.status(401).send("You have not logged in yet.");
        }
    } catch (error) {
        res.status(401).send("You have not logged in yet.");
    }
}

module.exports = {authenticate};