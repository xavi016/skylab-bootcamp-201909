function Login (container) {
    Component.call(this,container)
}

Login.extend(Component)

Login.prototype.onSignIn = function(expression){
    this.container.addEventListener('submit', function(e){
        e.preventDefault();
        var email = this.email.value;
        var password = this.password.value;
    
        expression(email,password);
    })
}