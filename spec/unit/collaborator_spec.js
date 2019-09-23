// const sequelize = require("../../src/db/models/index").sequelize;
// const Wiki = require("../../src/db/models").Wiki;
// const User = require("../../src/db/models").User;
// const Collaborator = require("../../src/db/models").Collaborator;

// describe("User", () => {

//     beforeEach((done) => {
//         // #1
//         sequelize.sync({ force: true })
//             .then(() => {
//                 done();
//             })
//             .catch((err) => {
//                 console.log(err);
//                 done();
//             });

//     });

//     describe("#create()", () => {

//         // #2
//         it("should create a Collaborator object", (done) => {
//             Collaborator.create({
//                     name: "Johnny"
//                 })
//                 .then((collaborator) => {
//                     expect(collaborator.name).toBe("Johnny");
//                     expect(collaborator.id).toBe(1);
//                     done();
//                 })
//                 .catch((err) => {
//                     console.log(err);
//                     done();
//                 });
//         });
//     });
// });