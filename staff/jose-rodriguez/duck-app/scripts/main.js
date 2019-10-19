var nav = document.getElementById("searching");
var main = document.getElementById("results");
var log = document.getElementsByClassName("login")[0];
var reg = document.getElementsByClassName("register")[0];
nav.style.display = 'none';
main.style.display = 'none';
reg.style.display = 'none';

(function init() {

    var signup = document.getElementsByClassName("register__button")[0]
    signup.addEventListener('click', function (e) {
        e.preventDefault();
        reg.style.display = 'flex';
        log.style.display = 'none';
    })

    var register = new Register(document.getElementsByClassName('register__form')[0]);
    register.onSignUp(function (name, surname, email, password) {
        registerUser(name, surname, email, password, function (error, email) {
            if (error, email) {
                if (error.message === `user with username "${email}" already exists`) {
                    feedback.render('Username already exists.')
                } else feedback.render(error.message);

            } else {
                reg.style.display = 'none';
                log.style.display = 'flex';
            }
        })
    })
    var login = new Login(document.getElementsByClassName('login__form')[0]);
    login.onSignIn(function (email, password) {

        authenticateUser(email, password, function (error, email) {
            if (error) {
                if (error.message === `user with username "${email}" does not exist`) {
                    feedback.render('User not registred. Please, sign up first')
                } else { feedback.render(error.message) }
            } else {
                log.style.display = 'none'
                nav.style.display = 'flex'
                main.style.display = 'flex'

            }
        })
    })

})()

initRandomDucks();

function initRandomDucks() {
    searchDucks('', '',function (ducks) {
        ducks = ducks.shuffle().slice(0, 6);
        list.render(ducks);

    })
};

var search = new Search(document.getElementsByClassName('navigation__content')[0]);
search.onSubmit(searchRequest)

function searchRequest(query) {
    searchDucks(query, '', list.render);
}

var list = new List(document.getElementById("results"));
list.onItemCreate = function () {
    var item = new Item(document.createElement('article'));

    item.onClick = function (id) {
        getDuck(id, '', function (duck) {

            var detail = new Detail(document.getElementById("details"));
            detail.render(duck)

        });
    }

    return item;
}

var feedback = new Feedback(document.getElementsByClassName('feedback')[0]);