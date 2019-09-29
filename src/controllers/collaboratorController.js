const wikiQueries = require("../db/queries.wikis.js");
const collaboratorQueries = require("../db/queries.collaborator.js")
const userQueries = require("../db/queries.users")
const bodyParser = require('body-parser')

module.exports = {
    index(req, res, next) {
        let wikiId = req.params.id;
        res.render("wikis/collaborators", { wikiId });
    },
    results(req, res, next) {
        let collaboratorData = {};
        collaboratorData.wiki = { id: req.params.wikiId }
        let username = req.body.username;
        console.log("Should be wiki id " + collaboratorData.wiki.id)
        userQueries.searchByUsername(username, (err, user) => {
            if (err || user == null) {
                res.redirect(404, "/")
            } else {
                collaboratorData.username = user.username;
                collaboratorData.user = user;
                res.render("wikis/collaborators_add", { collaboratorData })
            }
        });
    },
    create(req, res, next) {
        let id = req.params.collaboratorId;
        let wikiId = req.params.wikiId;
        let username = req.params.username

        let newCollaborator = {
            userId: id,
            wikiId: wikiId,
            username: username
        }

        collaboratorQueries.addCollaborator(newCollaborator, (err, collaborator) => {
            if (err) {
                res.redirect(500, `/wikis/${wikiId}`);
            } else {
                res.render("wikis/collaborators_success")
            }
        });
    },

    remove(req, res, next) {
        let collaboratorId = req.params.collaboratorId
        collaboratorQueries.removeCollaborator(collaboratorId, (err, collaborator) => {
            if (err) {
                res.redirect(500, `/wikis/${wikiId}`);
            } else {
                res.render("wikis/collaborators_removed")
            }
        });
    }
}