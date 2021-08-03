var todayHigh = document.querySelector("#todayHigh");
var tomorrowHigh = document.querySelector("#tomorrowHigh");
var fridayHigh = document.querySelector("#fridayHigh");
var saturdayHigh = document.querySelector("#saturdayHigh");
var todayLow = document.querySelector("#todayLow");
var tomorrowLow = document.querySelector("#tomorrowLow");
var fridayLow = document.querySelector("#fridayLow");
var saturdayLow = document.querySelector("#saturdayLow");


// var placeholder = document.getElementById("tempUnits");

todayHigh.innerHTML="24°";
tomorrowHigh.innerHTML="27°";
fridayHigh.innerHTML="21°";
saturdayHigh.innerHTML="26°";
todayLow.innerHTML="18°";
tomorrowLow.innerHTML="19°";
fridayLow.innerHTML="16°";
saturdayLow.innerHTML="21°";


function convert(){
    var placeholder = document.querySelector("#tempUnits");
    var tempUnits = placeholder.value;
    if(tempUnits=="°C"){
        todayHigh.innerHTML="24°"
        tomorrowHigh.innerHTML="27°"
        fridayHigh.innerHTML="21°"
        saturdayHigh.innerHTML="26°"
        todayLow.innerHTML="18°"
        tomorrowLow.innerHTML="19°"
        fridayLow.innerHTML="16°"
        saturdayLow.innerHTML="21°"
    }
    if(tempUnits=="°F"){
        todayHigh.innerHTML="75°"
        tomorrowHigh.innerHTML="80°"
        fridayHigh.innerHTML="69°"
        saturdayHigh.innerHTML="78°"
        todayLow.innerHTML="65°"
        tomorrowLow.innerHTML="66°"
        fridayLow.innerHTML="61°"
        saturdayLow.innerHTML="70°"
    }
}

var cookieAlert = document.querySelector("#cookieAlert");
function clearAlert() {
    cookieAlert.remove();
}

var burbank = document.querySelector("#burbank")
var chicago = document.querySelector("#chicago")
var dallas = document.querySelector("#dallas")

function cityAlert(element) {
    if (element == burbank){
        alert("Loading weather report... I'm sorry, I've never heard of Burbank before.")
    }
    else if (element == chicago) {
        alert("Loading weather report... I'm sorry, Chicago was blown away by a tornado.")
    }
    else {
        alert("Loading weather report... I'm sorry, Dallas got too hot and melted.")
    }
}