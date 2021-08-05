$(document).ready(function() {
    var dogUrl = 'https://dog.ceo/api/breeds/image/random';
    var catUrl = 'https://thatcopy.pw/catapi/rest/';
    var body = $('body');

    var promiseA = new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open('GET', dogUrl);
        request.onload = ()=> {
            if(request.status == 200) {
                resolve(request.response);
            } else {
                reject("File not found");
            }
        }

        request.send();
    });

    // promiseA.then(result=> {
    //     console.log(result);
    //     return result;
    // }).then(result=> {
    //     console.log('Result A');
    //     console.log(result);
    // })

    // Promise.resolve(promiseA).then(result=> {
    //     console.log(result);
    // });

    var catPromise = fetch(catUrl).then(response=> {
        return response.json();
    });

    var dogPromise = fetch(dogUrl).then(response=> {
        return response.json();
    })

    Promise.all([catPromise, dogPromise]).then(response => {
        $('.header').append($('<h1>Cats and dogs</h1>'));
        let catResponse = response[0];
        let dogResponse = response[1];
        body.append(`<img src='${catResponse.url}'/>`);
        body.append(`<img src='${dogResponse.message}'/>`);
    });
    


  
})