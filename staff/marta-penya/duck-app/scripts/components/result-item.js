function ResultItem(container) {
    Component.call(this, container);
    
    container.classList.add('item-list__li');
}

ResultItem.extend(Component);

ResultItem.prototype.onClick = undefined;

ResultItem.prototype.render = function (result) {    
    var item = document.createElement('a');
    item.classList.add('item-list__link');

    item.addEventListener('click', function () {
        var id = result.id;

        this.onClick(id);
    }.bind(this));

    var h2 = document.createElement('h2');
    var text = document.createTextNode(result.title);
    h2.classList.add('item-list__title');
    h2.appendChild(text);

    var img = document.createElement('img');
    img.classList.add('item-list__image');
    img.src = result.imageUrl;

    var price = document.createElement('p');
    var pric = document.createTextNode(result.price);
    price.classList.add('item-list__price');
    price.appendChild(pric);

    item.append(h2, img, price);

    this.container.append(item);
};