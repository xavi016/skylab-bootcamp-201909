function Results(container) {
  this.__container__ = container;
  container.innerHTML = '';
};

Results.prototype.onItemClick = function(duck) { console.log('clicked on duck', duck); };

Results.prototype.render = function(ducks) {
  this.__container__.innerHTML = '';

  ducks.forEach(function(duck) {
    var li = document.createElement('li');
    li.classList.add("duck");

    var result = new ResultItem(li);
    result.onClick = this.onItemClick; // ?
    result.render(duck);

    this.__container__.append(result.__container__);
  }.bind(this));
};
