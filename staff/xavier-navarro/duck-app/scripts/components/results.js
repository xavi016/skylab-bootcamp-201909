function Results(container){
    this.__container__ = container;
    container.innerHTML = '';
}
Results.prototype.render = function (ducks) {
    this.__container__.innerHTML = '';

    ducks.forEach(function (duck) {
        var result = new ResultItem(newElement('li','results__item'));
        result.onClick = this.onItemClick;
        result.render(duck);

        this.__container__.append(result.__container__);
    }.bind(this));

};