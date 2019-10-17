if (typeof Array.prototype.shuffle === 'undefined')
    Array.prototype.shuffle = function () {
        var result = [];

        for (var i = 0; i < this.length; i++) result[i] = this[i];

        for (var i = 0; i < result.length; i++) {
            var random = Math.floor(Math.random() * result.length);

            var value = result[i];

            result[i] = result[random];

            result[random] = value;
        }

        return result;
};


//PRESENTATION
var ducksContainer = document.getElementsByClassName('ducks')[0];

function printDucks(ducks) {

    var list = document.getElementsByClassName('ducks__list')[0];
            
    var ul = document.createElement('ul');
    list.innerHTML = '';

    list.append(ul);

    ducks.forEach(function(duck) {
        
        var li = document.createElement('li');
        li.classList.add('ducks__figure');

        var img = document.createElement('img');
        img.src = duck.imageUrl;

        var title = document.createElement('h3');
        title.innerText = duck.title;

        var price = document.createElement('p');
        price.innerText = duck.price;

        li.append(img, title, price);
        ul.append(li);

        li.addEventListener('click', function(e) {
            e.preventDefault();
            ducksContainer.classList.toggle('off');
            searchDuck(duck.id);
        })
    });
}

// PRESENTATION

var duckDetailContainer = document.getElementsByClassName('duck')[0];

function printSingleDuck(duck) {
    duckDetailContainer.innerHTML = '';

    var title = document.createElement('h1');
    title.innerText = duck.title;
    title.classList.add('duck__title');

    var img = document.createElement('img');
    img.src = duck.imageUrl;

    var price = document.createElement('h4');
    price.innerText = duck.price;
    price.classList.add('duck__price');
    
    var description = document.createElement('p');
    description.innerText = duck.description;
    description.classList.add('duck__description');

    var backButton = document.createElement('button');
    backButton.classList.add('duck__button');
    backButton.innerText = "Go back";

    backButton.addEventListener('click', function() {
        ducksContainer.classList.toggle('off');   
    })

    duckDetailContainer.append(title, img, price, description, backButton);
}

//BUSINESS

var search = document.getElementsByClassName('search')[0];

function searchDucks(input) {
    
    var newRequest = new XMLHttpRequest;

    newRequest.open('GET', 'http://duckling-api.herokuapp.com/api/search?q=' + input);

    newRequest.onreadystatechange = function() {

        if(this.readyState == 4 && this.status == 201) {
            var ducks = JSON.parse(newRequest.responseText);
            printDucks(ducks);
        }
    }
    newRequest.send();
}

search.addEventListener('submit', function(event) {
    var input = this.query.value;
    event.preventDefault();
    searchDucks(input);
});


function searchDuck(duckId) {

    var detailReq = new XMLHttpRequest;
    detailReq.open('GET', 'http://duckling-api.herokuapp.com/api/ducks/' + duckId);

    detailReq.onreadystatechange = function() {

        if(this.readyState == 4 && this.status == 201) {

            var duck = JSON.parse(detailReq.responseText);
            printSingleDuck(duck);
            
        };
    }
    detailReq.send();
}
