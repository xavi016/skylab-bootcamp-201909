function Register (container) {
    Component.call(this,container);
}

Register.extend(Component);

Register.prototype.onSignUp = function(expression){
    this.container.addEventListener('submit', function(e){
        e.preventDefault();
        var name = this.name.value;
        var surname = this.name.value;
        var email = this.email.value;
        var password = this.password.value;
    
        expression(name, surname,email,password);
    })
}