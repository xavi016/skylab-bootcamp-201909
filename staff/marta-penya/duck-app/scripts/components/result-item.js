function ResultItem(container) {
    Component.call(this, container);
    
    container.classList.add('item-list');
}

ResultItem.extend(Component);

ResultItem.prototype.onClick = undefined;

ResultItem.prototype.render = function (result) {

    var li = document.createElement('li');
    li.classList.add('item-list__item');

    var link = document.createElement('a');
    link.classList.add('item-list__link');

    link.addEventListener('click', function () {
        var id = result.id;

        this.onClick(id);
    }.bind(this));

    li.append(link);


    var h2 = document.createElement('h2');
    var text = document.createTextNode(result.title);
    h2.classList.add('item-list__title');
    h2.appendChild(text);

    // var title = document.createElement('h2');
    // title.classList.add('item__title');
    // title.innerText = result.title;

    var img = document.createElement('img');
    img.classList.add('item-list__image');
    img.src = result.imageUrl;

    // var image = document.createElement('img');
    // image.classList.add('item__image');
    // image.src = result.imageUrl;

    var price = document.createElement('p');
    var pric = document.createTextNode(result.price);
    price.classList.add('item-list__price');
    price.appendChild(pric);


    // var price = document.createElement('span');
    // price.classList.add('item__price');
    // price.innerText = result.price;

    link.append(h2, img, price);

    this.container.append(li);
};