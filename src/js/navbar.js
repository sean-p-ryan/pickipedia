var navItems = document.querySelectorAll(".navbar-container");
var active = document.querySelector(".active");
var newActive;

var signUp = document.querySelector(".sign-up")
var signIn = document.querySelector(".sign-in")
var profile = document.querySelector(".profile")
var wikis = document.querySelector(".wikis")
var home = document.querySelector(".home")

var path = window.location.pathname;

if (path.includes === "/"){
    newActive = home;
} else if (path.includes("sign_up")) {
    newActive = signUp;
} else if (path.includes("sign_in")) {
    newActive = signIn;
} else if (path.length === 1) {
    newActive = home;
} else if (path.includes("wikis")) {
    newActive = wikis;
} else if (path.includes("users")) {
    newActive = profile;
}

newActive.classList.add("active");
active.classList.remove("active");


