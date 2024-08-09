const jwt = require("jsonwebtoken");
require("dotenv").config();

const authentication = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).send("Please login first");
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).send("Invalid token, please login");
    }

    req.user_id = decoded.user_id;
    console.log("user_id:", req.user_id);
    next();
  });
};

module.exports = authentication;
