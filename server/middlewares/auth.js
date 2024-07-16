const jwt = require("jsonwebtoken")

// const auth = (req,res,next)=>{
//     console.log("helo middle ware")
//     try {

//         let token = req.cookies.token
//         console.log(req.cookies)
//         if(!token){
//             res.status(401).json({message: "Unauthorized User"})
//         }else{
           
//             let user = jwt.verify(token,process.env.JWT_SECRET_KEY)
//             res.user = user
//             console.log(req.user)    
//         }
//         next();
//     } catch (err) {
//         console.log("err in auth middleware",err)
//         res.status(401).json({message: "Unauthorized User"})
        
//     }
// }

// module.exports = auth;



const auth = async (req, res, next) => {
    console.log("Auth middleware triggered");

    try {
        const token = req.cookies.token;
        console.log("Middleware token:", token);

        if (!token) {
            return res.status(401).json({ message: "Unauthorized: Token not found" });
        }
        console.log("before token")
        const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
        console.log("after token")
        console.log("user",user)
        req.user = user; // Attach user info to req object

        next(); // Proceed to the next middleware or route handler
    } catch (err) {
        console.log("Error in auth middleware", err.message);

        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ message: "Unauthorized: Token has expired" });
        }

        if (err.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: "Unauthorized: Invalid token" });
        }

        res.status(401).json({ message: "Unauthorized: Token verification failed" });
    }
}

module.exports = auth;
