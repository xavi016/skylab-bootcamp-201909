

var lenguajes = ["PHP", "C", "C#", "Rust", "Java", "JavaScript", "C++", "Go"];

function reverse(array) {
    var reversed = [];
    
    for (let i = 0; i < array.length; i++) {
        reversed[i] = array[array.length - i - 1];
       
    }
    return reversed;
}
reverse(lenguajes);





