var form = document.getElementById("duck-search");
var ul = document.getElementsByClassName("results")[0];
var goHome = document.getElementsByClassName("go-home")[0];
var views = document.getElementsByClassName('view');
var feedback = new Feedback(document.getElementsByClassName('feedback')[0]);
// var searchView = new View(views[0]);
// var detailView = new View(views[1]);


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
var search = new Search(form);
var login = new Login(document.getElementsByClassName('login')[0]);
login.onSubmit();
var results = new Results(ul);
results.onItemRender = function () {
    var item = new ResultItem(newElement('li','results__item'));
    item.onClick = function (id) {
        retrieveDuck(id, function (duck) {
            var detail = new Detail(document.getElementsByClassName('details')[0]);
            detail.render(duck);
            switchViews();
        });
    };
    return item;
};
search.onSubmit(function (query) {
    debugger
    searchDucks(query, function (error, ducks) {
        if (error) {
            feedback.render(error.message);
            document.getElementsByClassName('feedback')[0].classList.remove('hidden')
            document.getElementsByClassName('main')[0].classList.add('hidden')
        } else {
            ducks = ducks.splice(0, 9);
            results.render(ducks);
        }
    });
});

// Selfie to print 9 ducks at the beginning
(function () {
    searchDucks('', function (error, ducks) {
        if (error) {
            feedback.render(error.message);
            document.getElementsByClassName('feedback')[0].classList.remove('hidden')
            document.getElementsByClassName('main')[0].classList.add('hidden')
        } else {
            ducks = ducks.splice(0, 9);
            results.render(ducks);
        }
    });
})();

ul.addEventListener("click", function (e) {
    var t = e.target;
    var parent = t.parentElement;
    var d = parent.dataset;
    var detail = new Detail(document.getElementsByClassName('details')[0]);
    debugger
    retrieveDuck(d.duckId, detail.render);
    switchViews();
});
function switchViews(){
    document.getElementsByClassName('main')[0].classList.toggle('hidden')
    document.getElementsByClassName('details')[0].classList.toggle('hidden')
}
goHome.addEventListener("click", switchViews);
getRandomDuck();