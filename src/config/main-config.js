require("dotenv").config();
const path = require("path");
const viewsFolder = path.join(__dirname, "..", "views");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const session = require("express-session");
const flash = require("express-flash");
const logger = require('morgan');
const ejs = require("ejs").__express;

module.exports = {
  init(app, express){
      app.set("views", viewsFolder);
      app.set("view engine", "ejs");
      app.engine('.ejs', ejs);
      app.use(bodyParser.urlencoded({ extended: true }));
      app.use(express.static(path.join(__dirname, "..", "assets")));
      app.use(expressValidator());
      app.use(session({
        secret: "this is the secret",
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 1.21e+9 } //set cookie to expire in 14 days
      }));
      app.use(flash());
      app.use(logger('dev'));
      app.use((req,res,next) => {
        res.locals.currentUser = req.user;
        next();
      })
  }
};