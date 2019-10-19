function login(){
    document.getElementById("searching").style.display = 'none';
    document.getElementById("results").style.display = 'none';

    var login = document.getElementsByClassName('login__form')[0];
    
    login.addEventListener('submit', function(e){
        e.preventDefault();

        var email = this.email.value;
        var password = this.password.value;

        if (!(email == 'pepito.grillo@mail.com') && !(password == '123')) {
            throw Error (TypeError + ' invalid user/password');
            var message = document.getElementsByClassName('login')[0];
            var error = document.createElement('p');
            error.innerText = "invalid user/password";
            message.append(error);
        } else {
            document.getElementById("searching").style.display = 'flex';
            document.getElementById("results").style.display = 'flex';
            document.getElementsByClassName('login__form')[0].style.display = 'none';
            initRandomDucks();
        }
    })
}