var main = document.getElementById("main");
var form = document.getElementById("duck-search");
var ul = document.getElementsByClassName("results")[0];
// var duck = document.getElementsByClassName("duck");
var goHome = document.getElementsByClassName("go-home")[0];

// Create object Search and give it the container element
var search = new Search(form);
// on submit form call listSearchResults
search.onSubmit(listSearchResults);
// Create new object to print results
var results = new Results(document.getElementsByClassName("results")[0]);

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
    var span = newElement('span','price-tag',duck.price);
    var img = newElement('img','duck__img');
    img.src = duck.imageUrl;
    ul.append(item);
    item.append(link);
    link.append(h2,p,img);
    p.append(span);
}

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
// Selfie to print 9 ducks at the beginning
(function () {
    searchDucks('', function (ducks) {
        ducks = ducks.splice(0, 9);
        printDucks(ducks);
    });
})();

function listSearchResults(query){
    searchDucks(query, printDucks);
}
function printDucks(ducks){
    results.render(ducks);
}

function printDetail(duck){
    document.getElementsByClassName('details__title')[0].innerText = duck.title;
    document.getElementsByClassName('details__img')[0].src = duck.imageUrl;
    document.getElementsByClassName('details__description')[0].innerText = duck.description;
    document.getElementsByClassName('details__price-tag')[0].innerText = duck.price;
    toggleClass();
}
function toggleClass(){
    document.getElementsByClassName('main')[0].classList.toggle('hidden')
    document.getElementsByClassName('details')[0].classList.toggle('hidden')
}
function searchDucks(query, callback) {
    query ? query : query = "";
    url = 'https://duckling-api.herokuapp.com/api/search?q='+query;
    call('GET', url, callback);
}

ul.addEventListener("click", function (e) {
    var t = e.target;
    var parent = t.parentElement
    var d = parent.dataset;
    retrieveDuck(d.duckId, printDetail)
});

goHome.addEventListener("click", toggleClass);
getRandomDuck();
