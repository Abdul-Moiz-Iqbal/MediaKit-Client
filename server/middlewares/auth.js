const jwt = require("jsonwebtoken")

const auth = (req,res,next)=>{
    try {

        let token = req.cookies.token
        // console.log(token)
        if(!token){
            res.status(401).json({message: "Unauthorized User"})
        }else{
           
            let user = jwt.verify(token,process.env.JWT_SECRET_KEY)
            req.user = user
            // console.log(req.user)    
        }
        next();
    } catch (err) {
        console.log("err in auth middleware",err)
        res.status(401).json({message: "Unauthorized User"})
        
    }
}

module.exports = auth;