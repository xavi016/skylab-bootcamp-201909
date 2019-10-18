function Search (container) {
    Component.call(this,container);
}

Search.extend(Component);

Search.prototype.onSubmit = function (expression) {
    this.container.addEventListener('submit', function (e){
        e.preventDefault();
        var query = this.q.value;

        expression(query);
    })
}