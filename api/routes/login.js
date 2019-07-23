const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/", (req, res) => {
  // console.log(req.body);
  User.findOne({ email: req.body.email })
    .exec()
    .then(user => {
      if (!user) {
        res.status(400).json({ message: "No such user." });
      }
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) res.status(401).json({ error: err });
        else {
          if (result) {
            const token = jwt.sign(
              { id: user._id, email: user.email },
              "secret",
              {
                expiresIn: "1h"
              }
            );
            res.status(200).json({ message: "Log in Successfully", token });
          } else res.status(401).json({ message: "Authentication failed!" });
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.json({ Error: err });
    });
  // res.json({ message: "Proceed to login" });
});

module.exports = router;
