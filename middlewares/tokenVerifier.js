const jwt = require("jsonwebtoken");

module.exports = function verifyToken(req, res, next) {
  // console.log("header", req.headers.authorization);
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "Unauthorized request" });
  }
  const token = req.headers.authorization.split(" ")[1];
  console.log(token);
  if (token == "undefined" || token === "null") {
    // console.log("no good");
    return res.status(401).json({ message: "Unauthorized request" });
  } else {
    let payload = jwt.verify(token, "secret");
    if (!payload)
      return res.status(401).json({ message: "Unauthorized request" });
    next();
  }
};
