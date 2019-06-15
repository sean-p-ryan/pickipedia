const bcrypt = require("bcryptjs");
const User = require("./models").User;

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
                callback(err);
            })
    },

    getUser(id, callback) {
        console.log("In getUser function")
        return User.findById(id)
            .then((user) => {
                callback(null, user)
            })
            .catch((err) => {
                callback(err);
            })
    },
    upgradeUser(req, callback) {
        console.log("In upgradeUser " + req.user + req.user.id)
        return User.findById(req.user.id)        
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
    downgradeUser(req, callback) {
        // logic to change user role in database
    }
}