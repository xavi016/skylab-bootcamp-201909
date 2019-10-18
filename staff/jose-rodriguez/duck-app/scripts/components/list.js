function List(container) {
    Component.call(this,container);

    container.innerHTML = "";

    this.render = this.render.bind(this);
}

List.extend(Component)

List.prototype.onItemCreate = undefined;

List.prototype.render = function (ducks) {
    this.container.innerHTML = "";
    var div = document.createElement('div');
    div.classList.add('article__container');
    this.container.append(div)
    ducks.forEach(function (duck) {
    
        var item = this.onItemCreate();
        item.render(duck);
        div.append(item.container)

    }.bind(this));
}