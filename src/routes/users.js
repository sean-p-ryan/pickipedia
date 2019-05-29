const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/users/signup", (req, res, next) => {
    res.send("Sign up test ");
  });

module.exports = router;