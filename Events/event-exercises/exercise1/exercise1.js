  
var interval;
var body = document.querySelector("body");
var automatic = document.querySelector("#automatic");

var handler = function(){
    body.classList.toggle("bg-color");
}

var turnOffHandler = function(){
    if (!interval) {
        automatic.textContent = "Turn Off";
        interval = setInterval(handler, 500);
    } else {
        automatic.textContent = "Turn On";
        clearInterval(interval);
        interval = undefined;
    }
}