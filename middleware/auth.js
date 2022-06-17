const jwt = require("jsonwebtoken");
const config = require("config");
module.exports = function (req, res, next) {
  try {
    const token = req.header("x-token");
    if (!token) {
      return res.status(401).json({ error: "authorization denied" });
    }
    //it gives us the payload data
    const decodeUser = jwt.verify(token, config.get("jwtSecret"));
    req.user = decodeUser.user;
    // res.json({ ...decodeUser });
    next();
  } catch (err) {
    console.log(err.message);
    if (err.message == "jwtexpired") {
      res.status(401).send({ err: "session expired!!! login again" });
    }
    res.status(500).send({ err: "server error" });
  }
};
//after checking the authentication we in request object we pass the user id so that we could check it
