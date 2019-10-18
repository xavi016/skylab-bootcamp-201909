function Login(container){
    Component.call(this, container);
}
Login.extend(Component);

Login.prototype.onSubmit = function (expression) {
    this.container.addEventListener('submit', function (event) {
        event.preventDefault();
        document.getElementsByClassName('login')[0].classList.add('hidden')
        document.getElementsByClassName('main')[0].classList.remove('hidden')
        
    });
};