const express = require("express");
const collaboratorController = require("../controllers/collaboratorController");
const router = express.Router();

router.get("/wikis/:id/collaborator", collaboratorController.index);
router.post("/wikis/:wikiId/collaborator/results", collaboratorController.results);
router.post("/wikis/:wikiId/collaborator/add/:collaboratorId/:username", collaboratorController.create);
router.get("/wikis/:wikiId/collaborator/:collaboratorId", collaboratorController.remove)

module.exports = router;