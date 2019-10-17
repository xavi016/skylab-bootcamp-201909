function Detail(container){
    this.__container__ = container;
}

Detail.prototype.render = function (duck) {
    this.__container__.getElementsByClassName('details__title')[0].innerText = duck.title;
    this.__container__.getElementsByClassName('details__img')[0].src = duck.imageUrl;
    this.__container__.getElementsByClassName('details__description')[0].innerText = duck.description;
    this.__container__.getElementsByClassName('details__price-tag')[0].innerText = duck.price;
};