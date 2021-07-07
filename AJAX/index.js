$(document).ready(function () {
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

    // var request = $.ajax({
    //     url: "https://dog.ceo/api/breeds/image/random",
    //     method:"GET",
    // });

    // request.done(function(response) {
    //     console.log(response);
    //     var img = $('<img/>').attr('src', response.message);
    //     $('body').append(img);
    // })

    // request.fail(function(jsonError, status) {
    //     alert(jsonError.responseJSON.message);
    // })



})

function getRandomDogImage() {
    var request = $.ajax({
        url: "https://dog.ceo/api/breeds/image/random",
        method: "GET",
    })

    request.done(function (response) {
        console.log(response);
        var img = $('<img/>').attr("src", response.message);
        $('#image-container').html("")
        $('#image-container').append(img);
    })

    request.fail(function (error) {
        console.log(error);
        alert(error.responseJSON.message);
    })
}

function testPostMethod() {
    var data = { Id: 1, Description: "First POST method" };
    
    $.post({
        url: "https://localhost:44327/api/PatientConsortium/test",
        data: JSON.stringify(data),
        contentType:"application/json"
    }).done(function(response) {
        alert(response);
    }).fail(function(error) {
        alert(error)
    })
    // var request = $.ajax({
    //     url: "https://localhost:44327/api/PatientConsortium/test",
    //     method: "POST",
    //     secure:true,
    //     cors:true,
    //     contentType:"application/json",
    //     data: JSON.stringify(data),
    // });

    // request.done(function (response) {
    //     alert(response);
    // })

    // request.fail(function (error) {
    //     console.log(error);
    //     alert(error);
    // })
}