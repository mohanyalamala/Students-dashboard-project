const jwt = require('jsonwebtoken')
const User = require('../model/user.model')

async function verifyToken(req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1];

        jwt.verify(token, process.env.JWT_SECRET, async(err, decode) => {
            if (err) {
                res.status(400).json({
                    message: "Unauthorized access",
                    error: true,
                    success: false
                });
            }

            console.log("Decoded username:", decode.username);
            //req.username = decode ? decode.username : "";
            req.user = decode ? decode : {};
            next();
        });
    } catch (err) {
        res.status(500).json({
            message: err,
            error: true,
            success: false
        });
    }
}


module.exports = verifyToken








// const jwt = require('jsonwebtoken');

// const varifyUser = (req, res, next) => {
//     const token = req.cookies.token;
//     if (!token) {
//         return res.json("Token is missing")
//     } else {
//         //jwt.verify(token, "jwt-secret-key", (err, decoded) => {
//         jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//             if (err) {
//                 console.error('Error verifying JWT:', err.message);
//                 return res.status(401).json({ error: 'Unauthorized' });
//                 //return res.json("Error with token")
//             } else {
//                 if (decoded.role === "admin") {
//                     next()
//                 } else {
//                     return res.json("not admin")
//                 }
//             }
//         });
//     }
// };

// module.exports = varifyUser;