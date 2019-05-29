const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("Got a get request")
  res.send("Test");
});

router.get("/users/signup", (req, res, next) => {
  console.log("Got a get request")
  res.send("Welcome to Blocipedia");
  res.status(404).send("Sorry, can't find that.")
});

module.exports = router;