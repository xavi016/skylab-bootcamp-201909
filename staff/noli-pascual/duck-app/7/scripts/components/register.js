function Register(container) {
    Component.call(this, container);
}

Register.extend(Component);

Register.prototype.onSubmit = function (expression) {
    this.container.addEventListener('submit', function (event) {
        event.preventDefault();

        var name = this.name.value;
        var surname = this.surname.value;
        var email= this.email.value;
        var password = this.password.value;
        
        expression(name, surname, email, password); //se llama en main, register.onSubmit
    });
};