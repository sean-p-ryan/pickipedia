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
                collaboratorData.user = user;
                res.render("wikis/collaborators_add", { collaboratorData })
            }
        });
    },
    create(req, res, next) {
        let id = req.params.collaboratorId;
        console.log("should be wiki id " + req.params.wikiId)
        console.log("should be collab id " + req.params.collaboratorId)

        const newCollaborator = {
            "id": req.params.collaboratorId,
            "wikiId": req.params.wikiId,
            "username": "",
            "first_name": "",
            "last_name": ""
        }

        userQueries.getUser(id, (err, user) => {
            if (err) {
                res.redirect(500, `/wikis/${wikiId}`);
            } else {
                newCollaborator.username = user.username;
                newCollaborator.first_name = user.first_name;
            }
        })

        collaboratorQueries.addCollaborator(newCollaborator, (err, collaborator) => {
            if (err) {
                res.redirect(500, `/wikis/${wikiId}`);
            } else {
                res.render("wikis/collaborators_success")
            }
        });
    },

    update(req, res, next) {
        // Update collaborators on a wiki
    },

    destroy(req, res, next) {
        // Remove a collaborator from a wiki
    },

    show(req, res, next) {
        // Show all collaborators on a wiki
    }
}