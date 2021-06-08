document.addEventListener('DOMContentLoaded', function () { 
    var button = document.getElementById("button2");

    button.onclick = function () {
        console.log("Button2 clicked");
    }

    var button1 = document.getElementById("button1");
    console.log(button1.onclick);
    button1.addEventListener("click", function() {
        alert("Listener 2")
    })
    button1.addEventListener("click", function() {
        alert(" Listener 3");
    });
})

function function2() {
    alert("Listener number 2")
}

function function3() {
    alert("Listener number 3")
}


function function1() {
    alert("Listener number 1")
}

function eventFunction(event) {
    console.log(event)
    console.log(event.type);
    console.log(event.currentTarget);
}