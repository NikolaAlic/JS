$(document).ready(function() {
    var dogUrl = 'https://dog.ceo/api/breeds/image/random';
    var catUrl = 'https://thatcopy.pw/catapi/rest/';
    var body = $('body');

    var catPromise = fetch(catUrl).then(function(response) {
        console.log(response);
        return response.json();
    });

    var dogPromise = fetch(dogUrl).then(function(response) {
        return response.json();
    });
    Promise.all([catPromise, dogPromise]).then(function(response) {
        console.log(response);
        setTimeout(() => {
            $('.header').append($('<h1>Cats and dogs</h1>'));
            
            var catResponse = response[0];
            body.append(`<img src='${catResponse.url}'/>`);

            var dogResponse = response[1];
            body.append(`<img src='${dogResponse.message}'/>`);
        }, 1000);
    })
})