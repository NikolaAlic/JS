//getDocumentElements();
// console.log(document.documentElement.hasChildNodes())
// console.log(document.documentElement.tagName)
// console.log(document.documentElement.childNodes)


function getBody(){
    var body = document.documentElement.childNodes[1];
    console.log(body);
}

function getDocumentElements() {
    console.log(document.documentElement.childNodes);
}

function getParagraphById() {
    console.log(document.getElementById("closer"));
}

document.addEventListener('DOMContentLoaded', function () {
    // console.log(document.body);
    // console.log(document.body.previousElementSibling);
    // console.log(document.body.nextElementSibling);
    // console.log( document.querySelectorAll("body p")[1].parentNode);
    // console.log(document.querySelectorAll("body p"))
    // console.log(document.querySelectorAll("body p"))
    getParagraphById();
    console.log(document.getElementsByTagName("p"))
    document.querySelectorAll("body p")[1].firstChild.nodeValue = "SECOND"
    // console.log( document.querySelectorAll("body p")[1].childNodes[1]);
    // document.querySelectorAll("body p")[1].childNodes[1].innerHTML = "SECOND"
 });



// getBody();

console.log(document.querySelector("head title"));
console.log(document.querySelectorAll("body p"))
