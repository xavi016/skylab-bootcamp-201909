var form = document.getElementsByClassName('form')[0];
var duckImages = document.getElementsByClassName('duck__image');
var viewList = document.getElementsByClassName('view__list')[0];
var viewSingle = document.getElementsByClassName('view__single')[0];
var buttonBack = document.getElementsByClassName('duck__button--back')[0];
var duckDom = document.getElementsByClassName('duck')[0];
var duckList = document.getElementsByClassName('duck__list')[0];


// recoge el evento cuando se hace una búsqueda en el formulario
form.addEventListener('submit', function(event) {
  event.preventDefault();
  var query = this.query.value;
  listSearchResults(query)
})

// función intermedia que llama a otra función para buscar resultos
function listSearchResults(query) {
  searchDucks(query, paintResults);
}

// función que espera un click en el botón de retroceder
function clickBackButton(button) {
  button.addEventListener('click', function() {
    toogleViews('view-list');
  })
};

// business

// función que hace una petición para buscar con el criterio query indicado y devuelve una callback para hacer algo después (renderizar el html)
function searchDucks(query, callback) {
  call('GET', query ? 'https://duckling-api.herokuapp.com/api/search?q=' + query : 'https://duckling-api.herokuapp.com/api/search', callback);
}

// función que hace una petición para buscar un pato en particular indicando su id y pasándole una función callback para hacer algo después (renderizar el html)
function retrieveDuck(id, callback) {
  call('GET', 'https://duckling-api.herokuapp.com/api/ducks/' + id, callback);
}

// helper

function call(method, url, callback) {
  fetch(method, url, function(response) {
    if (response.readyState == 4 && response.status == 201) {
      var results = JSON.parse(response.responseText);
      callback(results);
    }
  });
}

// utils

function fetch(method, url, callback) {
  var xhr = new XMLHttpRequest;
  xhr.open(method, url);
  xhr.onreadystatechange = function() {
    callback(this);
  };
  xhr.send();
}

// función que activa o desactiva pantallas
function toogleViews(view) {
  if (view === 'view-list') {
    viewList.classList.remove('view--hide');
    viewSingle.classList.add('view--hide');
  } else if (view === 'view-single') {
    viewList.classList.add('view--hide');
    viewSingle.classList.remove('view--hide');
  }
}

// imprime resultados cuando se hace una búsqueda general
// además, se puede hacer click en cada una de las imágenes para ver más detalles
function paintResults(ducks) {
  duckList.innerHTML = "";
  toogleViews('view-list');

  ducks.forEach(function(duck, index) {
    var li = document.createElement('li');
    var img = document.createElement('img');
    var h1 = document.createElement('h1');
    var p = document.createElement('p');

    li.classList.add("duck");
    h1.classList.add('duck__title');
    img.classList.add('duck__image');
    p.classList.add('duck__button')

    img.src = duck.imageUrl;
    h1.innerHTML = duck.title;
    p.innerHTML = duck.price;

    li.append(h1);
    li.append(img);
    li.append(p);
    duckList.append(li);

    var id = duck.id;
    duckImages[index].addEventListener('click', function() { // INDEX FOREACH!!
      duckDom.innerHTML = '';
      toogleViews('view-single');
      retrieveDuck(id, paintDetail);
    })
  });
};


// función que muestra el detalle de una búsqueda en concreto, mostrando los detalles
// además, incluye un botón para retroceder a la pantalla anterior
function paintDetail(duck) {
  var img = document.createElement('img');
  var h1 = document.createElement('h1');
  var p = document.createElement('p');
  var description = document.createElement('p');
  var div = document.createElement('div');
  var button = document.createElement('button');

  img.src = duck.imageUrl;
  h1.innerHTML = duck.title;
  p.innerHTML = duck.price;
  description.innerHTML = duck.description;
  button.innerHTML = '◀'

  h1.classList.add('duck__title');
  img.classList.add('duck__image');
  p.classList.add('duck__button');
  description.classList.add('duck__description');
  description.classList.add('duck__description--litle');
  div.classList.add('duck__container-buttons');
  button.classList.add('duck__button');
  button.classList.add('duck__button--back');

  duckDom.append(h1);
  duckDom.append(img);
  duckDom.append(description);
  duckDom.append(div)
  div.append(p);
  div.append(button);

  clickBackButton(button);
};
