function Login(container) {
    Component.call(this, container);
}

Login.extend(Component);

Login.prototype.onSubmit = function (expression) {
    this.container.addEventListener('submit', function (event) {
        event.preventDefault();

        var email= this.email.value;
        var password = this.password.value;
        
        expression(email, password); //se llama en main, register.onSubmit
    });
};