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
    downgradeUser(id, callback){
        return User.findById(id)
        .then((user) => {          
          if(!user){
            return callback ("User doesn't exist");
          } else {
            user.update({role: 0});
            callback(null, user);
          }
        })
        .catch((err) => {
          callback(err);
        })
      }
}