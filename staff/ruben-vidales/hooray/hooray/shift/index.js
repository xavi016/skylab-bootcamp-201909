Hooray.prototype.map = function () {
  
    var deleted = this[0];
    for (var i = 1; i < this.length; i++) {
        this[i-1] = this[i]; 
    }
    if(this.length > 0) this.length = this.length - 1;
    return deleted;
}