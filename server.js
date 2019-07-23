const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const loginRoute = require("./api/routes/login");
const registerRoute = require("./api/routes/register");
const contentRoute = require("./api/routes/content");
const cors = require("cors");

mongoose.connect(
  "mongodb+srv://tienthanh611:Nightmare95@financial-tgyzp.mongodb.net/user?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/login", loginRoute);
app.use("/register", registerRoute);
app.use("/content", contentRoute);

app.listen(process.env.port || 3000);
