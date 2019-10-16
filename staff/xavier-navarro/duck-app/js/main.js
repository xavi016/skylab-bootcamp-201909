var main = document.getElementById("main");
var form = document.getElementById("duck-search");
var ul = document.getElementsByClassName("results")[0];
var duck = document.getElementsByClassName("duck");
function getRandomDuck(){
    var xhr = new XMLHttpRequest;
    xhr.open('GET', 'https://duckling-api.herokuapp.com/api/search?q=');
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 201) {
            var ducks = JSON.parse(xhr.responseText);
            var randomDuck = Math.floor(Math.random()*286 )
            var logo = document.getElementsByClassName('logo')[0];
            logo.src = ducks[randomDuck].imageUrl;
        }
    };
    xhr.send(); 
}
function newElement(item, itemClass, text){
    var newItem = document.createElement(item);
    if(itemClass) newItem.classList.add(itemClass);
    if(text) newItem.innerText = text
    return newItem;
}
function createTemplate(duck){
    var item = newElement('li','results__item');
    var link = newElement('a','duck');
    link.href = "#";
    link.dataset.duckId = duck.id
    var h2 = newElement('h2','duck__title',duck.title);
    var p = newElement('p','duck__price');
    var span = newElement('span','price',duck.price);
    var img = newElement('img','duck__img');
    img.src = duck.imageUrl;
    ul.append(item);
    item.append(link);
    link.append(h2,p,img);
    p.append(span);
}
function printDucks(query){
    if(ul)  ul.innerHTML = "";
    query ? query : query = "";
    var xhr = new XMLHttpRequest;
    xhr.open('GET', 'https://duckling-api.herokuapp.com/api/search?q='+query);
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 201) {
            var ducks = JSON.parse(xhr.responseText);
            ducks.forEach(duck => {
                createTemplate(duck);
            });
        }
    };
    xhr.send(); 
}

function printDuckId(id){
    if(ul)  ul.innerHTML = "";
    var xhr = new XMLHttpRequest;
    xhr.open('GET', 'https://duckling-api.herokuapp.com/api/ducks/'+id.duckId);
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 201) {
            var result = JSON.parse(xhr.responseText);
            createTemplate(result);
            var li = document.getElementsByClassName("results__item")[0];
            var p = document.createElement('p');
            p.classList.add("description");
            p.innerText = result.description;
            li.append(p);
        }
    };
    xhr.send(); 
}

ul.addEventListener("click", function (e) {
    var t = e.target;
    var parent = t.parentElement
    var d = parent.dataset;
    printDuckId(d);
});
form.addEventListener("submit", function(event){
    event.preventDefault();
    var query = this.search.value;
    printDucks(query);
    this.search.value = "";
})

getRandomDuck();
printDucks();