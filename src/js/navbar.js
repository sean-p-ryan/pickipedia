var navItems = document.querySelectorAll(".navbar-container");
var active = document.querySelector(".active");
var newActive;

var signUp = document.querySelector(".sign-up")
var signIn = document.querySelector(".sign-in")
var profile = document.querySelector(".profile")
var wikis = document.querySelector(".wikis")
var home = document.querySelector(".home")

var path = window.location.pathname;

if (path.includes("sign_up")) {
    newActive = signUp;
} else if (path.includes("sign_in")) {
    newActive = signIn;
} else if (path.length === 1) {
    newActive = home;
}

active.classList.remove("active");
newActive.classList.add("active");

// Sign-up form
$(function() {
    var showClass = 'show';

    $('input').on('checkval', function() {
        var label = $(this).prev('label');
        if (this.value !== '') {
            label.addClass(showClass);
        } else {
            label.removeClass(showClass);
        }
    }).on('keyup', function() {
        $(this).trigger('checkval');
    });
});