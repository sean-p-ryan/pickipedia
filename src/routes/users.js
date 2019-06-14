const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const validation = require("./validation");

router.get("/users/sign_up", userController.sign_up);
router.get("/users/sign_in", userController.signInForm);
router.get("/users/signout", userController.signOut);
router.get("/users/:id", userController.show);
router.get("/users/payment", userController.payment);

router.post("/users/sign_in", validation.validateUsers, userController.signIn);
router.post("/users", validation.validateUsers, userController.create);
router.post("/users/:id/updatestandard", userController.updateStandard);
router.post("/users/:id/updatepremium", userController.updatePremium);

module.exports = router;