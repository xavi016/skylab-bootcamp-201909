function ResultItem(container) {
    this.__container__ = container;
    container.classList.add('ducks-panel__list-item');
}

ResultItem.prototype.onClick = function (duck) { console.log('clicked', duck) };

ResultItem.prototype.render = function (duck) {

    var item = document.createElement('a');

    item.addEventListener('click', function (event) {
        var id = duck.id;
        retrieveDuck(id, this.onClick);
    }.bind(this));

    var duckItem = document.createElement('article');
    duckItem.classList.add('duck');

    var title = document.createElement('h3');
    title.classList.add('duck__title');
    title.innerText = duck.title;

    var image = document.createElement('img');
    image.classList.add('duck__image');
    image.src = duck.imageUrl;

    var price = document.createElement('p');
    price.classList.add('duck__price');
    price.innerText = duck.price;

    duckItem.append(title, image, price);

    item.append(duckItem);

    this.__container__.append(item);
};