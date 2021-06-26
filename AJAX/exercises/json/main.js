const img = document.querySelector('#random-dog');
img.addEventListener('click', getRandomDog)
let isDog = true;


function getRandomDog() {
    if (!isDog) {
        const request = new XMLHttpRequest();
        request.open("GET", `https://dog.ceo/api/breeds/image/random`);
        request.onload = function (event) {
            if (request.status >= 200 && request.status < 400) {
                const dogObj = JSON.parse(request.responseText);
                const src = dogObj.message;
                img.setAttribute("src", src);

            }
        }

        request.send();
        isDog = true;
    } else {
        const ajax = new XMLHttpRequest();
        ajax.open("GET", `http://thecatapi.com/api/images/get?format=xml&results_per_page=100`);
        ajax.onload = function (event) {
            if (ajax.status === 200) {
                const xml = ajax.responseXML;
                const urlElement = xml.querySelector("url");
                let url = urlElement.textContent;
                img.setAttribute('src', url);
            }
        }

        ajax.send();
        isDog = false;
    }

}