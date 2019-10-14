Hooray.prototype.indexOf = function (searchedElement, from) {
    var start = from ? from : 0;
    for (let i = start; i < this.length; i++) {
        if (searchedElement == this[i]) {
            return i;
        }
    }
    return -1;
}