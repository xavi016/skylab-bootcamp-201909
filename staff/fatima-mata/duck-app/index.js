var duckList = document.getElementsByClassName('ducks')[0];
var duckSingle = document.getElementsByClassName('duck')[0];
var query = document.getElementsByClassName('search__criteria')[0];
var button = document.getElementsByClassName('search__button')[0];

var xhr = new XMLHttpRequest;
xhr.open('GET', 'https://duckling-api.herokuapp.com/api/search?q=all');
xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 201) {
        var ducks = JSON.parse(xhr.responseText);
        printDucks(ducks)
    }
};
xhr.send();

button.addEventListener('click', searchDucks)

function searchDucks(event) {
    event.preventDefault();

    duckList.innerHTML = '';

    var searchRequest = new XMLHttpRequest;
    searchRequest.open('GET', 'https://duckling-api.herokuapp.com/api/search?q=' + query.value);
    searchRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            var ducks = JSON.parse(searchRequest.responseText);
            printDucks(ducks)
        }
    };
    searchRequest.send();
}

function printDucks(ducks) {
    var ul = document.createElement('ul');

    duckList.append(ul);

    ducks.forEach(function (duck, index) {
        var li = document.createElement('li');
        li.className = 'ducks__item'

        var titleDuck = document.createElement('h2');
        var image = document.createElement('img');
        var price = document.createElement('span');

        titleDuck.innerText = duck.title;
        image.src = duck.imageUrl;
        price.innerText = duck.price;

        ul.append(li);

        li.append(titleDuck);
        li.append(image);
        li.append(price);

        var ducksItem = document.getElementsByClassName('ducks__item')[index];

        ducksItem.addEventListener('click', function() {
            searchDuck(duck.id);
        });
    });
};

function searchDuck (duckId) {
    duckSingle.innerHTML = '';

    var searchRequest = new XMLHttpRequest;
    searchRequest.open('GET', 'http://duckling-api.herokuapp.com/api/ducks/' + duckId);
    searchRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            var duck = JSON.parse(searchRequest.responseText);
            printDuck(duck)
        }
    };
    searchRequest.send();
}

function printDuck (duckData) {
    var titleDuck = document.createElement('h2');
    var image = document.createElement('img');
    var description = document.createElement('p');
    var price = document.createElement('span');

    titleDuck.innerText = duckData.title;
    image.src = duckData.imageUrl;
    description.innerText = duckData.description;
    price.innerText = duckData.price;

    duckSingle.append(titleDuck);
    duckSingle.append(image);
    duckSingle.append(description);
    duckSingle.append(price);

}