module.exports = {

  validateUsers(req, res, next) {
    if(req.method === "POST") {
      console.log("in validate users")
      console.log("Req.user" + " is " + req.user);
// #1
      req.checkBody("email", "must be valid").isEmail();
      req.checkBody("password", "must be at least 6 characters in length").isLength({min: 6})
      req.checkBody("passwordConfirmation", "must match password provided").optional().matches(req.body.password);
    }

    const errors = req.validationErrors();

    if (errors) {
      req.flash("error", errors);
      return res.redirect(req.headers.referer);
    } else {
      return next();
    }
  }
}