function test1() {
    console.log(location.hostname);
    console.log(navigator.vendor);
    console.log(location.search);
}

// window.test1();

function screenDimensions() {
    console.log(screen.height);
    console.log(screen.width);
    screen.height = 500;
    screen.width = 500;
    console.log(screen.height);
    console.log(screen.width);
}

// screenDimensions();

function storageTest() {
    localStorage.setItem("name", "Nikola Alic");
    var name = localStorage.getItem("name");
    // removeFromLocalStorage("name");
    console.log("Local storage: "+name);
    console.log("Locale storage 1: "+localStorage.getItem("name"));

    sessionStorage.setItem("name1", name);
    var name1 = sessionStorage.getItem("name1");
    // removeFromSessionStorage("name1");
    console.log("Session storage: "+name1);
    console.log("Session storage 1: "+sessionStorage.getItem("name1"));
}

function readFromStorage() {
    console.log(localStorage.getItem("name"));
    console.log(sessionStorage.getItem("name1"))
}

// storageTest();
// readFromStorage();

function removeFromLocalStorage(key) {
    localStorage.removeItem(key);
}

function removeFromSessionStorage(key) {
  var remove= sessionStorage.removeItem(key);
  console.log("Removed "+remove);
}

function clearAll() {
    localStorage.clear();
    sessionStorage.clear();
}

function openGoogle() {
    var win = window.open("https://google.com");

    setTimeout(function() {
        win.close();
    }, 4000);
}

// openGoogle();

function alertPromptConfirm() {
    alert("Hello world");
    var userInput = prompt('Super fancy question?');
    console.log(userInput);
    var yesNo = confirm("29. maja je Zvezda pobedila");
    console.log(yesNo);
    function foo() { console.log('foo'); }
    var fooIntervalId = setInterval(foo, 2000);
    setTimeout(function() {
        clearInterval(fooIntervalId);
        console.log("clear");
    }, 2000);


}

alertPromptConfirm();