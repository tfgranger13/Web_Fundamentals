
var userName = document.querySelector("#userName");
function changeUserName() {
    var alphabetCaps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var firstName = alphabetCaps[Math.floor(Math.random()*alphabetCaps.length)];
    var lastName = alphabetCaps[Math.floor(Math.random()*alphabetCaps.length)];
    for (var i = 0; i<Math.random()*10+1;i++){
        firstName = firstName + alphabetLower[Math.floor(Math.random()*alphabetLower.length)];
    }
    for (var i = 0; i<Math.random()*10+1;i++){
        lastName = lastName + alphabetLower[Math.floor(Math.random()*alphabetLower.length)];
    }
    var newName = firstName + " " + lastName;
    userName.textContent = newName;
}

var requests = 2;
var connections = 4;
var todd = document.querySelector("#todd");
var phil = document.querySelector("#phil");
var but2 = document.querySelector("#but2");
var but500 = document.querySelector("#but500");

// hide Todd on startup
var toddHidden = document.querySelector("#toddHidden");
toddHidden.style.display = "none";

// hide Phil on startup
var philHidden = document.querySelector("#philHidden");
philHidden.style.display = "none";

function toddAccept() {
    todd.remove();
    requests --;
    but2.textContent = requests;
    connections ++;
    but500.textContent = connections;
    toddHidden.style.display = "flex"
}
function toddReject() {
    todd.remove();
    requests --;
    but2.textContent = requests;
}

function philAccept() {
    phil.remove();
    requests --;
    but2.textContent = requests;
    connections ++;
    but500.textContent = connections;
    philHidden.style.display = "flex"
}
function philReject() {
    phil.remove();
    requests --;
    but2.textContent = requests;
}

function sorry() {
    alert("Sorry, you have no more friends.");
}