function Login(container) {
    Component.call(this, container);
}

Login.extend(Component);

Login.prototype.onSubmit = function (expression) {
    this.container.addEventListener('submit', function (event) {
        event.preventDefault();

        var userEnter = this.email.value;
        var passwordEnter = this.password.value;

        expression(userEnter,passwordEnter);
    });
};