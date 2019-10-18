function checkLogin(userEnter, passwordEnter, callback) {

    if (typeof userEnter !== 'string') throw new TypeError(userEnter +  ' is not a string');
    if (typeof passwordEnter !== 'string') throw new TypeError(passwordEnter +  ' is not a string');

    //validaciones
    var user = 'pepito@gmail.com';
    var password = '123'
    if((userEnter !== user) && (password !== password)) {
        var error = new Error;
        throw error;
        

    }
    else {
        return true;
    }
try {

    checkLogin(userEnter, passwordEnter)
    
} catch (error) {
    
}