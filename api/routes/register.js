const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");

router.post("/", (req, res) => {
  // console.log(req.body);
  const { email, password } = req.body;
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) res.status(500).json({ message: "Fail" });
    else {
      console.log(hash);
      const user = new User({
        email,
        password: hash
      })
        .save()
        .then(result => {
          // console.log(result);
          res.status(200).json({ result });
        })
        .catch(err => {
          console.log(err);
        });
    }
  });
});

module.exports = router;
