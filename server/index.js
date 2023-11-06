const express = require("express");
const app = express();
require("dotenv").config();
const { readdirSync } = require("fs");
const cors = require("cors");
const session = require('express-session');
const passport = require('passport');


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use("/uploads", express.static("uploads"));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

readdirSync("./routes").map((path) => {
  if (path !== "auth.js") {
    app.use("/api", require(`./routes/${path}`));
  }
  app.use("/auth", require(`./routes/${path}`));
});

app.get("/", (req, res) => {
  return req.user
    ? res.send(req.user)
    : res.send("I AM WORKING, it's a miracle!!!!!!!!!!!!!!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`PostPedia is running on http://localhost:${PORT}/`);
});

module.exports = app;
