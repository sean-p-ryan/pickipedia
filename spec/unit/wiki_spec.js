// const sequelize = require("../../src/db/models/index").sequelize;
// const Wiki = require("../../src/db/models").Wiki;
// const User = require("../../src/db/models").User;

// describe("Wiki", () => {

//   beforeEach((done) => {
//      this.wiki;
//      this.user;

//      sequelize.sync({force: true}).then((res) => {

//        User.create({
//          username: "starman1234",
//          email: "starman@tesla.com",
//          password: "Trekkie4lyfe"
//        })
//        .then((user) => {
//          this.user = user; //store the user

//          Wiki.create({
//            title: "Catwiki",
//            body: "A wiki about cats.",
//            private: false
//          })
//          .then((wiki) => {
//            this.wiki = wiki;
//            done();
//          })
//        })
//      });
//    });

//   describe("#create()", () => {

//     it("should create a wiki and store it in the database", (done) => {

//       Wiki.create({
//         title: "Guitar wiki",
//         body: "A wiki about guitars.",
//         private: false
//       })
//       .then((wiki) => {

//         expect(wiki.title).toBe("Guitar wiki");
//         expect(wiki.body).toBe("A wiki about guitars.");
//         expect(wiki.private).toBe(false);
//         done();
//       })
//       .catch((err) => {
//         console.log(err);
//         done();
//       });
//     });

//     it("should not create a wiki without a title or body", (done) => {
//       Wiki.create({
//         title: null,
//         body: null
//       })
//       .then((wiki) => {
//         done();
//       })
//       .catch((err) => {

//         expect(err.message).toContain("Wiki.title cannot be null");
//         expect(err.message).toContain("Wiki.body cannot be null");
//         done();

//       })
//     });

//   });

// });