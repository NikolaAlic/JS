var div = document.getElementById("root");
let items = ["1 cup Fresh Basil", "1 cup Pine Nuts", "2 cups Butter Lettuce", "1 Yellow Squash", "3 cloves of Garlic"]
var ul = React.createElement("ul", null, items.map((item, i) => React.createElement("li", { key: i }, item)));
let ol = React.createElement("ol", null, items.map((item, i) => React.createElement("li", { key: i }, item)));

var dogUrl = 'https://dog.ceo/api/breeds/image/random';
fetch(dogUrl).then(response => {
    return response.json();
}).then(response => {
    let img = React.createElement('img', { key: 'img', src: response.message });
    ReactDOM.render([ul, ol, img], div)
})

