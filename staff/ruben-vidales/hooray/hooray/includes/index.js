Hooray.prototype.includes = function (find_value, param_start) {
    var start = param_start ? param_start : 0;

    for (let i = start; i < this.length; i++) {
        if (this[i] === find_value) {
            return true;
        }
    }
    return false;
}