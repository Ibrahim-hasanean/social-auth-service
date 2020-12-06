const jwt = require("jsonwebtoken");
const User = require("../models/user.js");
async function validator(req, res, next) {
  console.log(req.headers["x-access-token"])
  if (!req.headers["x-access-token"])
    return res.status(400).json({ status: 400, message: "token must be provided" });
  jwt.verify(
    req.headers["x-access-token"],
    process.env.JWT_KEY,
    async (err, decode) => {
      if (err) {
        return res.status(401).json({status:401,message:"unauthurized"})
      }
      let user = await User.findById(decode.userId);      
      req.user=user;  
      next();
    }
  );
}

module.exports = validator;
