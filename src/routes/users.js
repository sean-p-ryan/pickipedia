const express = require("express");
const router = express.Router();
var express = require('express')
var app = express()
const userController = require("../controllers/userController");

// router.get("/users/signup", userController.signUp);
// router.get("/users/sign_in", userController.signInForm);
// router.get("/users/sign_out", userController.signOut);
// //router.get("/users/:id", userController.show);
// router.post("/users/sign_in", userController.signIn);
// router.post("/users", userController.create);
router.get("/users/signup", userController.signup);

module.exports = router;