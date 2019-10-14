Hooray.prototype.fill = function (val, init, end) {
    var endParam = end ? end : this.length;
    var startParam = init ? init : 0;

    for (let i = 0; i < this.length; i++) {
        if (i >= startParam && i <= endParam) {
            this[i] = val;
        }
    }
    return this;
}
