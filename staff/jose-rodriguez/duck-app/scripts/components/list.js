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
    this.add(div)
    ducks.forEach(function (duck) {
    
        var item = this.onItemCreate();
        item.render(duck);
        debugger
        this.add(div)

    }.bind(this));
}