const wikiQueries = require("../db/queries.wikis.js");
const collaboratorQueries = require("../db/queries.collaborator.js")
const userQueries = require("../db/queries.users")
const bodyParser = require('body-parser')

module.exports = {
    index(req, res, next) {
        let wiki = req.params.wiki
        res.render("wikis/collaborators", { wiki });
    },
    create(req, res, next) {
        const userId = req.params.id;
        const newCollaborator = {
            "name": '',
            "id": null,
            "wikiId": null
        }
        userQueries.getUser(userId, (err, user) => {

            if (err || user == null) {
                res.redirect(404, "/")
            } else {
                console.log("Here's the user obkect" + user.JSON())
            }
        });

        collaboratorQueries.addCollaborator(newCollaborator, (err, wiki) => {
            if (err) {
                res.redirect(500, `/wikis/${wiki.id}`);
            } else {
                res.redirect(303, `/wikis/collaborators_success`)
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