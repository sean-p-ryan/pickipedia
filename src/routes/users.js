const express = require("express");
const router = express.Router();
const collaboratorController = require("../controllers/collaboratorController")
const userController = require("../controllers/userController");
const validation = require("./validation");

router.get("/users/sign_up", userController.sign_up);
router.get("/users/sign_in", userController.signInForm);
router.get("/users/signout", userController.signOut);
router.get("/users/:id", userController.show);
router.get("/users/:id/upgrade_form", userController.upgradeForm);
router.get("/users/:id/downgrade_form", userController.downgradeForm);

router.post("/users/sign_in", validation.validateUsers, userController.signIn);
router.post("/users", validation.validateUsers, userController.create);
router.post("/users/:id/upgrade", userController.upgrade);
router.post("/users/:id/downgrade", userController.downgrade);
router.post("/users/collaborators/search", userController.search);
router.post("/users/collaborators/add/:id", collaboratorController.create);





module.exports = router;