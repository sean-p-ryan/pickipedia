const sequelize = require("../../src/db/models/index").sequelize;
const User = require("../../src/db/models").User;
const userQueries = require("../../src/db/queries.users");
const userController = require("../../src/controllers/userController");

describe("User", () => {

    beforeEach((done) => {
        // #1
        sequelize.sync({ force: true })
            .then(() => {
                done();
            })
            .catch((err) => {
                console.log(err);
                done();
            });

        User.create({
                email: "user@example.com",
                password: "1234567890",
                username: "The Greatest"
            })
            .then((user) => {
                expect(user.email).toBe("user@example.com");
                expect(user.id).toBe(1);
                expect(user.username).toBe("The Greatest");
                done();
            })
            .catch((err) => {
                console.log(err);
                done();
            });

    });

    describe("#create()", () => {

        // #2
        xit("should create a User object with a valid email and password", (done) => {
            User.create({
                    email: "user@example.com",
                    password: "1234567890",
                    username: "The Greatest"
                })
                .then((user) => {
                    expect(user.email).toBe("user@example.com");
                    expect(user.id).toBe(1);
                    expect(user.username).toBe("The Greatest");
                    done();
                })
                .catch((err) => {
                    console.log(err);
                    done();
                });
        });

        // #3
        xit("should not create a user with invalid email or password", (done) => {
            User.create({
                    email: "It's-a me, Mario!",
                    password: "1234567890"
                })
                .then((user) => {
                    done();
                })
                .catch((err) => {
                    // #4
                    expect(err.message).toContain("Validation error: must be a valid email");
                    done();
                });
        });

        xit("should not create a user with an email already taken", (done) => {

            // #5
            User.create({
                    email: "user@example.com",
                    password: "1234567890"
                })
                .then((user) => {

                    User.create({
                            email: "user@example.com",
                            password: "nananananananananananananananana BATMAN!"
                        })
                        .then((user) => {

                            // the code in this block will not be evaluated since the validation error
                            // will skip it. Instead, we'll catch the error in the catch block below
                            // and set the expectations there

                            done();
                        })
                        .catch((err) => {
                            expect(err.message).toContain("Validation error");
                            done();
                        });

                    done();
                })
                .catch((err) => {
                    console.log(err);
                    done();
                });
        });
    });

    describe("#search", () => {
        console.log("In search test")
        it("Should find a user by a username", () => {
            User.create({
                    email: "user@example.com",
                    password: "1234567890",
                    username: "The Greatest"
                })
                // Call search method in user controller
            userController.search("The Greatest")
                .then((user) => {
                    expect(user.username).toBe("The Greatest");
                    done();
                })
                .catch((err) => {
                    console.log(err);
                    done();
                });
        })
    });
});