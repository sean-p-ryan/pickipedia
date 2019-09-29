const Wiki = require("./models").Wiki;
const User = require("./models").User;
const Authorizer = require("../policies/wiki");
const Collaborator = require("./models").Collaborator;

module.exports = {
    addCollaborator(newCollaborator, callback) {
        return Collaborator.create({
                id: newCollaborator.id,
                wikiId: newCollaborator.wikiId,
                first_name: newCollaborator.first_name,
                last_name: newCollaborator.last_name,
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
    }
}