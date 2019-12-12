const wikiQueries = require("../db/queries.wikis.js");
const collaboratorQueries = require("../db/queries.collaborator.js");
const userQueries = require("../db/queries.users.js");
const markdown = require("markdown").markdown;

module.exports = {

    index(req, res, next) {
        wikiQueries.getAllWikis((err, wiki) => {
            if (err) {
                console.log("Here's the error " + err)
                res.redirect(500, "static/index");
            } else {
                res.render("wikis/index", { wiki });
            }
        })
    },

    new(req, res, next) {
        // markdown.toHTML(wiki.body);
        res.render("wikis/new");
    },

    create(req, res, next) {
        let newWiki = {
            title: req.body.title,
            body: markdown.toHTML(req.body.body),
            private: req.body.private,
            userId: req.user.id
        };

        wikiQueries.addWiki(newWiki, (err, wiki) => {
            if (err) {
                res.redirect(500, "/wikis/new");
            } else {
                res.redirect(303, `/wikis/${wiki.id}`)
            }
        });
    },

    edit(req, res, next) {
        let wikiId = req.params.id;
        let wikiData = {};
        wikiQueries.getWiki(wikiId, (err, wiki) => {
            if (err || wiki == null) {
                res.redirect(404, "/")
            } else {
                wikiData.wiki = wiki;
                collaboratorQueries.findCollaboratorsById(wikiId, (err, collaborators) => {
                    if (err) {
                        res.redirect(404, "/")
                    } else {
                        wikiData.collaborators = collaborators;
                        res.render("wikis/edit", { wikiData })
                    }
                })
            }
        })
    },

    update(req, res, next) {
        wikiQueries.updateWiki(req.params.id, req.body, (err, wiki) => {
            if (err || wiki == null) {
                console.log("here's the error " + err)
                res.redirect(404, `/wikis/${req.params.id}/edit`)
            } else {
                res.redirect(`/wikis`)
            }
        });
    },

    destroy(req, res, next) {

        wikiQueries.deleteWiki(req.params.id, (err, deletedRecordsCount) => {
            if (err) {
                res.redirect(500, `/wikis/${req.params.id}`)
            } else {
                res.redirect(303, `/wikis`)
            }
        })
    },

    show(req, res, next) {

        wikiQueries.getWiki(req.params.id, (err, wiki) => {
            console.log("in wikis show")
            if (err || wiki == null) {
                console.log("in error block " + err)
                res.redirect(404, "/")
            } else {
                res.render("wikis/show", { wiki });
            }
        });
    },
    makePublic(req, res, next) {
        wikiQueries.downgradeWiki(req.params.id, false);
    }
};