const userQueries = require("../db/queries.users.js");
const passport = require("passport");
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


const stripe = require('stripe')('sk_test_2G5XIkKpmH0NQfehzrHZfKdA00SXR7o9H9');


module.exports = {
  sign_up(req, res, next) {
    res.render("users/sign_up");
  },
  create(req, res, next) {
    //#1
    let newUser = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      passwordConfirmation: req.body.passwordConfirmation
    };
    // #2
    userQueries.createUser(newUser, (err, user) => {
      if (err) {
        console.log("Error inside userQueries.createUser " + err);
        req.flash("error", err);
        res.redirect("/users/sign_up");
      } else {

        // #3
        passport.authenticate("local")(req, res, () => {
          req.flash("notice", "You've successfully signed in!");
          res.redirect("/");

          const sgMail = require('@sendgrid/mail');

          sgMail.setApiKey(process.env.SENDGRID_API_KEY);

          const msg = {
            to: newUser.email,
            from: 'test@blocipedia.com',
            subject: 'Welcome to Blocipedia',
            text: 'where you can collaborate and share',
            html: '<strong>Looking forward to seeing your stuff!</strong>',
          };
          sgMail.send(msg);
        })
      }
    });
  },

  signInForm(req, res, next) {
    res.render("users/sign_in");
  },

  signIn(req, res, next) {

    passport.authenticate("local")(req, res, function () {
      console.log(req.user);
      if (!req.user) {
        req.flash("notice", "Sign in failed. Please try again.")
        res.redirect("/users/sign_in");
      } else {
        req.flash("notice", "You've successfully signed in!");
        res.redirect("/");
      }
    })
  },

  signOut(req, res, next) {
    req.logout();
    req.flash("notice", "You've successfully signed out!");
    res.redirect("/");
  },

  show(req, res, next) {
    userQueries.getUser(req.params.id, (err, currentUser) => {

      if (err || currentUser == null) {
        res.redirect(404, "/")
      } else {
        res.render("users/show", { currentUser });
      }
    });
  },
  upgradeForm(req, res, next) {
    userQueries.getUser(req.params.id, (err, currentUser) => {

      if (err || currentUser == null) {
        res.redirect(404, "/")
      } else {
        res.render("users/upgrade", { currentUser });
      }
    });
  },
  downgradeForm(req, res, next) {
    console.log("in downgrade form")
    userQueries.getUser(req.params.id, (err, currentUser) => {

      if (err || currentUser == null) {
        res.redirect(404, "/")
      } else {
        res.render("users/downgrade", { currentUser });
      }
    });
  },
  upgrade(req, res, next) {    
    userQueries.upgradeUser(req.user.id, (err, user) => {
      if (err) {
        req.flash("error", err);
        res.redirect("/users/upgrade");
      } else {
        console.log('Stripe');
        let amount = 1500;

        stripe.customers.create({
          email: req.body.stripeEmail,
          source: req.body.stripeToken
        })
          .then(customer =>
            stripe.charges.create({
              amount,
              description: "Pickipedia Account Upgrade Charge",
              currency: "usd",
              customer: customer.id
            }))
          .then(charge => res.render("users/upgrade_success"))
      }
    })
  },
  downgrade(req, res, next){    
    userQueries.downgradeUser(req.user.id, (err, user) => {
      if(err){
        console.log('err', err)
        req.flash("error", err);
        res.redirect("/users/downgrade");
      } else {        
        res.render("users/downgrade_success");
      }
    });
  }
}