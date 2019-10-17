function ResultItem(container) {
  Component.call(this, container);
  container.innerHTML = '';
};

ResultItem.extend(Component);

ResultItem.prototype.onClick = undefined;

ResultItem.prototype.render = function(result) {
  var img = document.createElement('img');
  var h1 = document.createElement('h1');
  var p = document.createElement('p');

  h1.classList.add('duck__title');
  img.classList.add('duck__image');
  p.classList.add('duck__button');

  img.src = result.imageUrl;
  h1.innerHTML = result.title;
  p.innerHTML = result.price;

  this.container.append(h1, img, p);

  img.addEventListener('click', function() {
    var id = result.id;
    this.onClick(id);
  }.bind(this));
};
