document.addEventListener('DOMContentLoaded', function () {
    console.log(document.querySelectorAll("body ul"))
    var ul1 = document.querySelectorAll("body ul")[0];
    ul1.setAttribute("id", "secondList")
    //updateListElements(ul1.querySelectorAll("li"), "list-element", false);
    setListElementBackground(ul1);
    var ul2 = document.querySelectorAll("body ul")[2];
    console.log(ul2.querySelectorAll("li"));
    setThirdList(ul2);
    //updateListElements(ul2.querySelector("li"), "third-list-element", true);
});

function updateListElements(elements, className, toUpperCase) {
    var length = elements.length;
    console.log(elements);
    console.log(length);
    for (var i = 0; i < length; i++) {
        var li = elements[i];
        console.log(li);
        elements.className = className;
        if (toUpperCase) {
            li.innerHTML = li.innerHTML.toUpperCase();
        }
    }
}

function setListElementBackground(ul) {
    var length = ul.childNodes.length;
    for (var i = 0; i < length; i++) {
        var li = ul.childNodes[i];
        li.className = "list-element";
    }
}

function setThirdList(ul) {
    var length = ul.childNodes.length;
    console.log(ul);
    //var liElements = ul.childNodes.querySelectorAll("li");
    //console.log(liElements);

    for (var i = 0; i < length; i++) {
        var li = ul.childNodes[i];
        console.log(li);
        li.className = "third-list-element";
        var text = li.innerHTML;
        console.log(li.innerHTML);
        if (text) {
            li.innerHTML = text.toUpperCase()
        }
    }
}