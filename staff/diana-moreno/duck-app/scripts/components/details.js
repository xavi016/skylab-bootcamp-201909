function Detail(container) {
  this.__container__ = container;
  container.innerHTML = '';
};

Detail.prototype.render = function(duck) {
  var img = document.createElement('img');
  var h1 = document.createElement('h1');
  var p = document.createElement('p');
  var description = document.createElement('p');
  var div = document.createElement('div');
  var button = document.createElement('button');
  var divDuck = document.createElement('div');

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
  divDuck.classList.add("duck");

  divDuck.append(h1);
  divDuck.append(img);
  divDuck.append(description);
  divDuck.append(div);
  div.append(p);
  div.append(button);
  this.__container__.append(divDuck);

  button.addEventListener('click', function() {
    toogleViews('view-list');
  });
};

