$(document).ready(function() {
    // var request = new XMLHttpRequest();
    // request.open("GET", "note.xml");
    // request.send();

    // request.onload = function(event) {
    //     var response = request.responseXML;
    //     console.log("onload")
    //     console.log(response)
    //     //var from = xmlDoc.querySelector("TITLE").textContent;
    // }

    // var requestJson = new XMLHttpRequest();
    // requestJson.open("GET", "example.json");
    // requestJson.send();

    // requestJson.onload = function(event) {
    //     var response = requestJson.response;
    //     var obj = JSON.parse(response);
        
    //     console.log(response)
    //     console.log(obj)
    //     var date = new Date();
    //     var test = {id: 1, name:"Test test", date: JSON.stringify(date)};
    //     var jsonString = JSON.stringify(test);
    //     console.log(jsonString);

    // }

    var request = $.ajax({
        url: "https://dog.ceo/api/breeds/image/random",
        method:"POST",
    });

    request.done(function(response) {
        console.log(response);
        var img = $('<img/>').attr('src', response.message);
        $('body').append(img);
    })

    request.fail(function(jsonError, status) {
        alert(jsonError.responseJSON.message);
    })
        
})