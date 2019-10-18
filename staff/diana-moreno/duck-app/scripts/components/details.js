function Detail(container) {
  Component.call(this, container);
  container.innerHTML = '';
};

Detail.extend(Component);

Detail.prototype.onBack = undefined;

Detail.prototype.render = function(item) {
  this.container.innerHTML = '';

  var img = document.createElement('img');
  var h1 = document.createElement('h1');
  var p = document.createElement('p');
  var description = document.createElement('p');
  var div = document.createElement('div');
  var button = document.createElement('button');
  var divDuck = document.createElement('div');

  img.src = item.imageUrl;
  h1.innerHTML = item.title;
  p.innerHTML = item.price;
  description.innerHTML = item.description;
  button.innerHTML = '◀';

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
  this.container.append(divDuck);

  button.addEventListener('click', this.onBack);
};
