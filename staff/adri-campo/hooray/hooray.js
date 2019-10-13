function Hooray() {
    for (var i = 0; i < arguments.length; i++)
        this[i] = arguments[i];

    this.length = arguments.length;
};

/**
 * Iterates the current hooray and evaluates an expression on each item.
 * 
 * @param {Function} expression The expression to evaluate in each item of the hooray.
 * 
 * @throws {TypeError} If expression is not a function.
 */
Hooray.prototype.forEach = function (expression) {
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');

    //throw Error('🤡');
    for (var i = 0; i < this.length; i++)
        expression(this[i], i, this);
};

/**
 * Pushes a variable number of items into this hooray.
 * 
 * @param {...any} item The item (or items) to push.
 * 
 * @returns {number} The new lenth of the hooray.
 */
Hooray.prototype.push = function () {
    for (var i = 0; i < arguments.length; i++)
        this[this.length++] = arguments[i];

    return this.length;
};


/**
 * Copies a part of the hooray within a new hooray starting from beginning
 * to end (end not included). The original hooray will not be modified.
 *
 * 
 * @param {number} begin  Item for the start position
 * 
 * @param {number} end  Item for the end position
 * 
 * @returns {Hooray} New hooray with the extracted values
 */

Hooray.prototype.slice = function (begin, end) {
    if (!this) throw Error('is not defined');
    if (!(this instanceof Hooray)) throw Error('Is not a Hooray');

    //if (typeof end === 'undefined') end = hooray.length;

    var result = []; // {}; // WTF?

    begin = begin || 0;
    begin = begin < 0 ? this.length + begin : begin;
    end = end || this.length;
    end = end < 0 ? this.length + end : end;

    for (var i = begin; i < end; i++)
        result[i - begin] = this[i];

    //result.length = end - begin; // WTF?

    return result;
}


/**
 * Deletes the last item of an array and returns de deleted item.
 *  
 * @returns {number} returns de last item deleted on the array
 */
Hooray.prototype.pop = function () {

    if (this.length === 0) return undefined;

    var result = this[this.length - 1];
    this.length--;

    return result;
}


/**
 * Find the first element that accomplish a condition and returns its index. 
 * 
 * @param {Array} array we want to test.
 * @param {Function} expression that contains the condition. 
 * @returns {element} the index of the element found. 
 * */

Hooray.prototype.findIndex = function (expression) {
    if (!(this instanceof Hooray)) throw TypeError(this + " is not defined");
    if (!(expression instanceof Function)) throw TypeError(expression + " is not a function");

    for (let i = 0; i < this.length; i++) {
        if (expression(this[i])) {
            return i;
        }
    }
    return -1;
}




/**
 * Create a new array with all the elements that accomplish the condition of the function given.
 * 
 * @param {Function} expression we use to test the elements. 
 * 
 * @returns {Array} newArr with the items of the first array that accomplished the test.
 */



// function checkCondition (item){
//     return item < 25

// }

Hooray.prototype.filter = function (expression) {
    if (!(expression instanceof Function)) throw TypeError(expression + " is not a function");

    var newHooray = new Hooray;
    for (i = 0; i < this.length; i++) {
        if (expression(this[i])) {
            newHooray[newHooray.length] = this[i];
            newHooray.length++
        }
    }
    return newHooray

};


/**
 * Removes the last element of an array, and returns that element. This method change the lenght of the array.
 * 
 * @param {Hooray} The hooray to pop the value from
 * @returns {Function} The value deleted from the expression 
 * 
 */

Hooray.prototype.map = function (expression) {
    if (typeof expression !== "function") throw TypeError(expression + " is not a function")

    var newHooray = new Hooray;

    for (var i = 0; i < this.length; i++) {
        newHooray[newHooray.length] = expression(this[i])
        newHooray.length++
    }
    return newHooray

};


// var arrayexample = [2,3,5,6];

// function modify (item) {
//     return item * 2
// };

// console.log(map,modify);


/**
 * 
 * El método some() comprueba si al menos un elemento del array cumple con 
 * la condición implementada por la función proporcionada.
 *
 * @param {Array} array 
 * @param {Function} expression we use to test the elements. 
 * 
 * @returns {boolean} true if any of the elements match with the condition or false if any of them match.
 *  
 */ 


function checkCondition(item) {
    return item > 5
}

Hooray.prototype.some = function(expression) {  
    if (typeof expression !== "function") throw new TypeError(expression + " is not a function");

    for (i=0; i< this.length; i++){
        if (expression(this[i])){
            return true 
        }
    } 
    return false
};



/**
 * DESCRIPTION DE SPLICE AQUÍ!!!!!!!!!!!!!!
 * 
 * 
 * @returns {number}
 * 
 */

Hooray.prototype.splice = function (start, delCount) {
    //if (typeof end === 'undefined') end = array.length;
    // if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
    var result = new Hooray;
    var newHooray = [];
    var x = 0;
    var arrPos = 0;
    var itemsLen;
    var items = [];

    if (typeof delCount === 'undefined') {
        itemsLen = arguments.length - 1;
        var index = 1;
    } else {
        itemsLen = arguments.length - 2
        var index = 2;
    }
    for (var y = 0; y < itemsLen; y++) {
        items[y] = arguments[index];
        index++;
    }

    var finalLength = this.length - delCount + itemsLen;

    // Deleted elements
    for (var i = 0; i < delCount; i++) {
        result[i] = this[i + start];
    }
    while (x < finalLength) {
        if (x === start) {
            for (var y = 0; y < delCount; y++) {
                arrPos++
            }
            for (var y = 0; y < itemsLen; y++) {
                newHooray[x] = items[y]
                x++
            }
        } else {
            newHooray[x] = this[arrPos]
            x++
            arrPos++
        }
    }
    this.length = newHooray.length
    for (var i = 0; i < this.length; i++) {
        this[i] = newHooray[i]
    }

    return result;
};

