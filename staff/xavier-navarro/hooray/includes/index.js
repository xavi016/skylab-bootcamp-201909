/**
 * @param {*} hooray The hooray to concatenate elements to newhooray
 * 
 * @returns newhooray contains: hooray + arguments.
 * 
 */
Hooray.prototype.includes  = function() { 	    
    var finded = true;
    var continuar = true;
    for (var i = 0; i < arguments.length && finded; i++) {
        continuar = true;
        for (var j = 0; j < this.length && continuar; j++) {
            if (arguments[i] === this[j]) continuar = false              
        } 
        if (continuar) finded = false;     
    }       
    return finded;
};