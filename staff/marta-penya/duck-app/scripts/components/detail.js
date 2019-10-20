function Detail(container) {
    Component.call(this, container);
}

Detail.extend(Component);

Detail.prototype.onBack = undefined;

Detail.prototype.render = function (item) {   
    var title = this.container.getElementsByClassName('detail-list__title')[0];
    title.innerText = item.title;

    var image = this.container.getElementsByClassName('detail-list__image')[0];
    image.src = item.imageUrl;

    var description = this.container.getElementsByClassName('detail-list__description')[0];
    description.innerText = item.description;

    var store = this.container.getElementsByClassName('detail-list__store')[0];
    store.href = item.link;

    var price = this.container.getElementsByClassName('detail-list__price')[0];
    price.innerText = item.price;

    var back = this.container.getElementsByClassName('detail-list__button')[0];
    back.addEventListener('click', this.onBack);
};