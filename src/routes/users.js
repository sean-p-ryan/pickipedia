const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const validation = require("./validation");

router.get("/users/sign_up", userController.sign_up);
router.get("/users/sign_in", userController.signInForm);
router.get("/users/signout", userController.signOut);
router.get("/users/:id", userController.show);
router.get("/users/:id/upgrade_form", userController.upgradeForm);
router.get("/users/:id/downgrade_form", userController.downgradeForm);

router.post("/users/sign_in", userController.signIn);
router.post("/users", userController.create);
router.post("/users/:id/upgrade", userController.upgrade);
router.post("/users/:id/downgrade", userController.downgrade);




module.exports = router;