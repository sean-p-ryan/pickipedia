const Wiki = require("./models").Wiki;
const User = require("./models").User;
const Authorizer = require("../policies/wiki");
const Collaborator = require("./models").Collaborator;

module.exports = {
    addCollaborator(newCollaborator, callback) {
        console.log("in add collaborator, should be id" + newCollaborator.username)
        return Collaborator.create({
                userId: newCollaborator.userId,
                wikiId: newCollaborator.wikiId,
                username: newCollaborator.username
            })
            .then((collaborator) => {
                callback(null, collaborator);
            })
            .catch((err) => {
                callback(err);
                console.log("Here's the error in addCollaborator " + err)
            })
    },
    findCollaboratorsById(id, callback) {
        return Collaborator.findAll({ where: { wikiId: id } })
            .then(collaborators => {
                callback(null, collaborators);
            })
            .catch((err) => {
                callback(err);
                console.log("Here's the error in findCollaboratorsById" + err)
            })
    },
    removeCollaborator(id, callback) {
        return Collaborator.destroy({ where: { userId: id } })
            .then(user => {
                callback(null, user)
            })
            .catch(err => {
                callback(err)
            })
    }
}