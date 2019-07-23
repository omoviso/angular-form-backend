const express = require("express");
const router = express.Router();
const tokenVerifier = require("../../middlewares/tokenVerifier");

router.get("/", tokenVerifier, (req, res) => {
  // console.log(req.headers.authorization);
  const content = {
    title:
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    body: "Random dude"
  };
  res.json(content);
});

module.exports = router;
