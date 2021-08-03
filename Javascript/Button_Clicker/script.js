function remove(element){
    element.remove();
    alert("Excellent addition! Thanks for your input!");
}
function log(element){
    if (element.innerText == "Login"){
        element.innerText = "Logout";
    }
    else {
        element.innerText = "Login";
    }
}

var defOneLikes = 13;
var defTwoLikes = 37;

function likeOne(element){
    defOneLikes = defOneLikes + 1;
    element.innerText = defOneLikes + " likes";
    alert("Ninja was liked");
}
function likeTwo(element){
    defTwoLikes = defTwoLikes + 1;
    element.innerText = defTwoLikes + " likes";
    alert("Ninja was liked");
}
