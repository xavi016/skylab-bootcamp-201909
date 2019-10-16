function ResultItem(container) {
  this.__container__ = container;
  container.innerHTML = '';
}

ResultItem.prototype.onClick = function(duck) { console.log('clicked', duck) };

ResultItem.prototype.render = function(duck) {
  var img = document.createElement('img');
  var h1 = document.createElement('h1');
  var p = document.createElement('p');

  h1.classList.add('duck__title');
  img.classList.add('duck__image');
  p.classList.add('duck__button');

  img.src = duck.imageUrl;
  h1.innerHTML = duck.title;
  p.innerHTML = duck.price;

  this.__container__.append(h1, img, p);

  img.addEventListener('click', function() {
    var id = duck.id;
    toogleViews('view-single');
    retrieveDuck(id, this.onClick);
  }.bind(this));
};
