require("dotenv").config();

const path = require("path");
const viewsFolder = path.join(__dirname, "..", "views");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const session = require("express-session");
const flash = require("express-flash");
const passportConfig = require("./passport-config");
const logger = require('morgan');
const pg = require('pg');
const connectionString = "postgres://vimbcjrehweypj:0e015bf853ae8c9ded68d7c10cf3b087552ea3a02f3a575ecabec235af953857@ec2-174-129-208-118.compute-1.amazonaws.com:5432/d9sva8g7qltint"
const moment = require('moment');

module.exports = {
  init(app, express){
    app.set("views", viewsFolder);
    app.set("view engine", "ejs");
    app.use(logger('dev'));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(expressValidator());
    app.use(express.static('src'));
    app.use(session({
      secret: "process.env.cookiesecret",
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 1.21e+9 } //set cookie to expire in 14 days
    }));
    app.use(flash());
    passportConfig.init(app);
    app.use((req,res,next) => {
      res.locals.currentUser = req.user;
      next();
    });
    app.locals.moment = moment;
  }
};