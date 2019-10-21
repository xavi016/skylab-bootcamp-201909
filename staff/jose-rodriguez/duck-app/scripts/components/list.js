function List(container) {
    Component.call(this,container);

    container.innerHTML = "";

    this.render = this.render.bind(this);
}

List.extend(Component)

List.prototype.onItemCreate = undefined;

List.prototype.render = function (ducks) {
    this.container.innerHTML = "";

    ducks.forEach(function (duck) {
    
        var item = this.onItemCreate();
        item.render(duck);
        this.container.append(item.container)

    }.bind(this));
}