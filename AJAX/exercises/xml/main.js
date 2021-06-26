  
window.addEventListener("click",getAnimalImages)

function getAnimalImages() {
    const ajax = new XMLHttpRequest();
    ajax.open("GET", `http://thecatapi.com/api/images/get?format=xml&results_per_page=100`);
    ajax.onload = function (event) {
        if (ajax.status === 200) {
            const xml = ajax.responseXML;
            const urlElements = xml.querySelectorAll("url");
            const urlStringsArr = [];
            urlElements.forEach(function(url){
                urlStringsArr.push(url.textContent);
            })
            const body = document.querySelector('body');
            urlStringsArr.forEach(function(urlString){
                const img = document.createElement('img');
                img.setAttribute('src', urlString);
                img.style.width = "400px";
                body.appendChild(img);
            })
        }
    }

    ajax.send();
}