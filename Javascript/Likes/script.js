var counter = [9, 12, 9];
var likeNeil = document.querySelector('#likeNeil');
var likeNichole = document.querySelector('#likeNichole');
var likeJim = document.querySelector('#likeJim');

function addNeil(){
    counter[0] ++;
    console.log(counter[0]);
    likeNeil.innerText = counter[0] + " like(s)";
}
function addNichole(){
    counter[1] ++;
    likeNichole.innerText = counter[1] + " like(s)";
}
function addJim(){
    counter[2] ++;
    likeJim.innerText = counter[2] + " like(s)";
}