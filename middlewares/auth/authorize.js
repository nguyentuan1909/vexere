
const authorize = (types) => (req,res,next)=>{
    const {user} = req.headers;
    if(types.includes(user.type)){
        next();
    }else{
        res.status(403).send("You have logged in but have no right for perform this action.")
    }
};

module.exports = {
    authorize,
}