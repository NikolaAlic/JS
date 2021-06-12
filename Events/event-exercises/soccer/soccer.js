var player = document.querySelector("#player");
var field = document.querySelector("#field");
var controlMovingButton = document.querySelector(".disable");
var isTurnOn = true;


function movePlayer(event) {
    var x = event.offsetX - 100;
    var y = event.offsetY - 100;
    var styleValue = "top:" + y + "px;left:" + x + "px";
    player.setAttribute("style", styleValue);
}

function controlMoving() {
    if (isTurnOn) {
        field.removeEventListener("click",movePlayer);
        controlMovingButton.textContent = "Start moving";
        isTurnOn = false;
    } else {
        field.addEventListener("click", movePlayer);
        controlMovingButton.textContent = "Stop moving";
        isTurnOn = true;
    }
}



field.addEventListener("click", movePlayer);

controlMovingButton.addEventListener("click", controlMoving);