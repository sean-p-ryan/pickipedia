const wikiQueries = require("../db/queries.wikis.js");
const collaboratorQueries = require("../db/queries.collaborator.js")
const userQueries = require("../db/queries.users")
const bodyParser = require('body-parser')

module.exports = {
    index(req, res, next) {
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/add-collaborators-p3
            }
        });
    },

<<<<<<< HEAD
    update(req, res, next) {
        // Update collaborators on a wiki
    },

    destroy(req, res, next) {
        // Remove a collaborator from a wiki
    },

    show(req, res, next) {
        // Show all collaborators on a wiki
=======
    remove(req, res, next) {
        let collaboratorId = req.params.collaboratorId
        collaboratorQueries.removeCollaborator(collaboratorId, (err, collaborator) => {
            if (err) {
                res.redirect(500, `/wikis/${wikiId}`);
            } else {
                res.render("wikis/collaborators_removed")
            }
        });
>>>>>>> origin/add-collaborators-p3
    }
}