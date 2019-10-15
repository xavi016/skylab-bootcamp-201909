var form = document.getElementsByClassName('form')[0];
var duckImage = document.getElementsByClassName('duck__image');
var viewList = document.getElementsByClassName('view__list')[0];
var viewSingle = document.getElementsByClassName('view__single')[0];
var buttonBack = document.getElementsByClassName('duck__button--back')[0];
var duckDom = document.getElementsByClassName('duck')[0];
var duckList = document.getElementsByClassName('duck__list')[0];

function searchDucks(e) {
  resetHtml();
  toogleViews('view-list');

  e.preventDefault();
  var query = e.target.query.value;
  var xhr = new XMLHttpRequest;
  xhr.open('GET', 'https://duckling-api.herokuapp.com/api/search?q=' + query);

  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 201) {
      var ducks = JSON.parse(xhr.responseText);

      ducks.forEach(function(duck, index) {
        createDomDucks(duck);
        var id = duck.id;
        duckImage[index].addEventListener('click', function() { // INDEX FOREACH!!
        searchDuck(id);
        })
      });
    }
  };
  xhr.send();
};

clickForm(form);

function searchDuck(id) {
  resetHtml();
  toogleViews('view-single');

  var xhr = new XMLHttpRequest;
  xhr.open('GET', 'https://duckling-api.herokuapp.com/api/ducks/' + id);

  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 201) {
      var duck = JSON.parse(xhr.responseText);
      var button = createDomDuck(duck);

      clickBackButton(button);
      clickForm(form);
    }
  };
  xhr.send();
};


// auxiliar functions

function resetHtml(view) {
  if(view === 'view-list') {
    duckDom.innerHTML = '';
    duckList.innerHTML = "";
  } else if(view === 'view-single')
    duckDom.innerHTML = '';
};

function toogleViews(view) {
  if(view === 'view-list') {
    viewList.classList.remove('view--hide');
    viewSingle.classList.add('view--hide');
  } else if(view === 'view-single') {
    viewList.classList.add('view--hide');
    viewSingle.classList.remove('view--hide');
  }
}

function createDomDucks(duck) {
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
};

function createDomDuck(duck) {
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
  div.classList.add('duck__buttons');
  button.classList.add('duck__button');
  button.classList.add('duck__button--back');

  duckDom.append(h1);
  duckDom.append(img);
  duckDom.append(description);
  duckDom.append(div)
  div.append(p);
  div.append(button);

  return button;
};

function clickForm(form) {
  form.addEventListener('submit', searchDucks);
};

function clickBackButton(button) {
  button.addEventListener('click', function() {
    viewList.classList.remove('view--hide');
    viewSingle.classList.add('view--hide');
  })
};