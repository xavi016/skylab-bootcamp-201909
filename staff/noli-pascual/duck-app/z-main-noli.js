
//HELPER PARA ABRIR LA COMUNICACIÓN CON LA API

function call(method, url, callback) {

    //INVOCA AL FETCH Y TRATA LOS DATOS PARA CONVERTIR JSON
    fetch(method, url, function (response) /*es la callback de fetch*/ {
        if (response.readyState == 4) {
            var result = JSON.parse(response.responseText);

            callback(result);
        }
    });
}

//no es un helper, es un útil

//cuando se invoque irá a BUSCAR LOS DATOS Y LOS PARSEA
function fetch(method, url, callback) {
    var newRequest = new XMLHttpRequest;

    newRequest.open(method, url);

    newRequest.onreadystatechange = function () {
        callback(this); //parsear los resultados
    };

    newRequest.send();
}

//CREAMOS COMPONENTE PARA FORM SEARCH

function SearchForm(container) {
    this.container = container;
}

var search = new SearchForm(document.getElementsByClassName('search')[0]);

SearchForm.prototype.onSubmit = function (expression) {
    this.container.addEventListener('submit', function (event) {
        event.preventDefault();

        var query = this.query.value;

        expression(query);
    });
};

search.onSubmit(function (query) {
    searchDucks(query);
});



//LOGICA FUNCION BUSCAR PATOS

function searchDucks(query, callback) {
    // if (typeof query !== 'string') throw new TypeError(query +  ' is not a string');
    // if (typeof callback !== 'function') throw new TypeError(callback +  ' is not a function');

    call('GET', 'https://duckling-api.herokuapp.com/api/search?q=' + query, callback);
}



//CREAMOS COMPONENTE PARA ALOJAR UN LISTADO PATOS

function ResultsList(container) {
    this.container = container;
    container.innerHTML = ''; //se vacía pq hay etiq de HTML de antes.
}


//Método a prototipo ResultsList para renderizar los resultados de list en pantalla.

ResultsList.prototype.print = function(ducks) {

    this.container.innerHTML = ''; //no sé si realmente hace falta

    var ul = document.createElement('ul');
   
    list.append(ul);

    ducks.forEach(function(duck) {//por cada pato creamos una row
        
        var listItem = new ListItem(document.createElement('li'));
       
        listItem.print(duck);
        this.container.append(listItem.container);
    });
        
};

//Instanciamos una lista
var resultsList = new ResultsList(document.getElementsByClassName('ducks__list')[0]);


//CONTENEDOR DE CADA ITEM (row) DE LA LISTA

function ListItem(container) {
    this.container = document.getElementsByClassName('ducks__row');
}

//Método para renderizar los items list en pantalla.

ListItem.prototype.print = function(duck) {
 
    var img = document.createElement('img');
    img.src = duck.imageUrl;
    
    var title = document.createElement('h3');
    title.innerText = duck.title;
    
    var price = document.createElement('p');
    price.innerText = duck.price;
    
    this.container.append(img, title, price);
    
    
    this.addEventListener('click', function(e) {//li
        e.preventDefault();
        var idSingleDuck = duck.id;
        paintSingleDuck(idSingleDuck); //retrieveDuck(id, paintDetail)
        
    });
}

//CONTENEDOR PARA CADA SINGLE DUCK

function SingleDuck(container) {
    this.container = container;
}

SingleDuck.prototype.print = function(duck) {

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
        singleDuck.classList.add('off');
        resultsList.classList.remove('off'); 
    })

    this.Container.append(title, img, price, description, backButton);
}

function paintSingleDuck(duck) {

    var singleDuck = new SingleDuck(document.getElementsByClassName('ducks__item'));
    singleDuck.print(duck);

    resultsList.classList.add('off');
    singleDuck.classList.remove('off');
    
}


