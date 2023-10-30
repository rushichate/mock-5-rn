const jwt = require("jsonwebtoken")

const verify = async (req,res,next) =>{
    const token = req.headers.authorization
    if(!token) return res.status(401).json("Please login first")

    jwt.verify(token,"masai", function(err,decoded){
        if(decoded){
            req.body.email = decoded.email
            next()
        }else{
            res.send("Please login first")
        }
    })
}

module.exports = {
    verify
}