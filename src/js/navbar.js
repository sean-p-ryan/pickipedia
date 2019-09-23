var navItems = document.querySelectorAll(".navbar-container");
var active = document.querySelector(".active");
var newActive;

var signUp = document.querySelector(".sign-up")
var signUp = document.querySelector(".sign-in")
var signUp = document.querySelector(".profile")
var signUp = document.querySelector(".wikis")

var path = window.location.pathname;

if (path.includes("sign_up")){
    newActive = signUp;
} else if(path.includes("sign_up")) {

}

document.addEventListener("click", function(e) {
    newActive = e.target;
    console.log(newActive)
});