function Register(container) {
    Component.call(this, container);
}

Register.extend(Component);

Register.prototype.onSubmit = function (expression) {
    this.container.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = this.email.value
        const password = this.password.value
        const name = this.name.value
        const surname = this.surname.value

               
        expression(name, surname, email, password)
    });
};

