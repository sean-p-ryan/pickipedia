const Wiki = require("./models").Wiki;
const User = require("./models").User;
const Authorizer = require("../policies/wiki");
const Collaborator = require("./models").Collaborator;

module.exports = {
    addCollaborator(newCollaborator, callback) {
        return Collaborator.create({
                name: newCollaborator.name,
                id: newCollaborator.id,
                wikiId: newCollaborator.wikiId
            })
            .then((collaborator) => {
                callback(null, collaborator);
            })
            .catch((err) => {
                callback(err);
            })
    }
}