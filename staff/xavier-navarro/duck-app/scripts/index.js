var form = document.getElementById("duck-search");
var ul = document.getElementsByClassName("results")[0];
var goHome = document.getElementsByClassName("go-home")[0];

// Create object Search and give it the container element
var search = new Search(form);
// on submit form call listSearchResults
search.onSubmit(listSearchResults);
// Create new object to print results
var results = new Results(ul);

// results.onItemClick = function(duck) {
//     var detail = new Detail(document.getElementsByClassName('details')[0]);
//     detail.render(duck);
//     switchViews();
// };

function newElement(item, itemClass, text){
    var newItem = document.createElement(item);
    if(itemClass) newItem.classList.add(itemClass);
    if(text) newItem.innerText = text
    return newItem;
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
    // switchViews();
}
function switchViews(){
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
    var parent = t.parentElement;
    var d = parent.dataset;
    var detail = new Detail(document.getElementsByClassName('details')[0]);
    retrieveDuck(d.duckId, function (duck) {
        detail.render(duck)
    });
    switchViews();
});

goHome.addEventListener("click", switchViews);
getRandomDuck();
