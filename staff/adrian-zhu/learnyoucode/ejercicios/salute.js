module.exports = function(lang, name){
    switch(lang){
        case 'en':
            return `Hello, ${name}`
            
        case 'es':
            return `Hola, ${name}`
    }
}