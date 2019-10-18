function Detail(container) {
    Component.call(this, container);
}

Detail.extend(Component);

Detail.prototype.onBack = undefined;

Detail.prototype.render = function (item) {
    
    var h2 = document.createElement('h2');
    var text = document.createTextNode(item.title);
    h2.classList.add('item-list__title');
    h2.classList.add('item-list__title--modif');
    h2.appendChild(text);

    // var title = this.container.getElementsByClassName('detail__title')[0];
    // title.innerText = item.title;

    var img = document.createElement('img');
    img.classList.add('item-list__image');
    img.classList.add('item-list__image--modif');
    img.src = item.imageUrl;

    // var image = this.container.getElementsByClassName('detail__image')[0];
    // image.src = item.imageUrl;

    var desc = document.createElement('p');
    var description = document.createTextNode(item.description);
    desc.classList.add('item-list__description');
    desc.appendChild(description);

    // var description = this.container.getElementsByClassName('detail__description')[0];
    // description.innerText = item.description;

    var store = document.createElement('a');
    store.classList.add('item-list__store');
    store.innerText = 'Store';

    // var store = this.container.getElementsByClassName('detail__store')[0];
    // store.href = item.link;
    var price = document.createElement('p');
    var pric = document.createTextNode(item.price);
    price.classList.add('item-list__price');
    price.classList.add('item-list__price--modif');
    price.appendChild(pric);

    // var price = this.container.getElementsByClassName('detail__price')[0];
    // price.innerText = item.price;

    var button = document.createElement('button');
    button.classList.add('item-list__button');
    button.innerText = 'Back';
    button.addEventListener('click', this.onBack);

    // var back = this.container.getElementsByClassName('detail__back')[0];
    // back.addEventListener('click', this.onBack);
};