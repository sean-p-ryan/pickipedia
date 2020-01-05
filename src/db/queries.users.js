const bcrypt = require("bcryptjs");
const User = require("./models").User;
const Wiki = require("./models").Wiki;

module.exports = {

    createUser(newUser, callback) {

        const salt = bcrypt.genSaltSync();
        const hashedPassword = bcrypt.hashSync(newUser.password, salt);

        return User.create({
                username: newUser.username,
                email: newUser.email,
                password: hashedPassword
            })
            .then((user) => {
                callback(null, user);
            })
            .catch((err) => {
                console.log(err, request.body.email);
                callback(err);
            })
    },

    getUser(id, callback) {
        console.log("In user queries getUser fxn")
        return User.findById(id)
            .then((user) => {
                callback(null, user)
            })
            .catch((err) => {
                console.log(err)
                callback(err);
            })
    },
    getCollaboratorData(data, callback) {
        console.log("In collaborator data2, should be id" + data.userId)
        return User.findById(data.userId)
            .then((user) => {
                if (!user) {
                    callback("User doesn't exist");
                } else {
                    data.username = user.username;
                    callback(data)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    },
    returnUser(id) {
        return User.findById(id)
            .then((user) => {
                return user
            })
            .catch((err) => {
                console.log(err)
            })
    },
    getUsersByIds(ids, callback) {
        let allUsers = [];
        ids.forEach(id => {
            return User.findById(id)
                .then((user) => {
                    allUsers.push(user);
                })
                .catch((err) => {
                    callback(err);
                })
        })
        console.log("Should contain all users " + allUsers)
        callback(null, allUsers)
    },
    searchByUsername(username, callback) {
        return User.findAll({ where: { username: username } })
            .then((users) => {
                console.log("Here are the users " + users)
                callback(null, users)
            })
            .catch((err) => {
                callback(err);
            })
    },
    upgradeUser(id, callback) {
        return User.findById(id)
            .then((user) => {
                console.log('upgradeUser')
                if (!user) {
                    callback("User doesn't exist");
                } else {
                    user.update({ role: 1 });
                    callback(null, user);
                }
            })
            .catch((err) => {
                callback(err);
            })
    },
    downgradeUser(id, callback) {
        return User.findById(id)
            .then((user) => {
                if (!user) {
                    return callback("User doesn't exist");
                } else {
                    user.update({ role: 0 });
                    callback(null, user);
                }
            })
            .catch((err) => {
                callback(err);
            })
    },
    downgradeWikis(id) {
        return Wiki.all()
            .then((wikis) => {
                console.log("In downgrade wikis");
                wikis.forEach((wiki) => {
                    console.log(wiki);
                    console.log("Here's id" + id);
                    if (wiki.userId == id && wiki.private == true) {
                        console.log("Here's a private wiki" + wiki.title)
                        wiki.update({
                            private: false
                        })
                    }
                })
            })
            .catch((err) => {
                console.log("In downgrade wikis, error " + err);
                callback(err);
            })
    }
}