var nav = document.getElementsByClassName("search")[0];
var main = document.getElementsByClassName("results")[0];
var log = document.getElementsByClassName("login")[0];
var reg = document.getElementsByClassName("register")[0];
nav.style.display = 'none';
main.style.display = 'none';
reg.style.display = 'none';

(function init() {

    var register = new Register(document.getElementsByClassName('form')[1]);
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

    document.getElementsByClassName('register__button')[0].addEventListener('click', function (e) {
        e.preventDefault();
        log.style.display = 'flex';
        reg.style.display = 'none';
    })

    var login = new Login(document.getElementsByClassName('form')[0]);
    login.onSignIn(function (email, password) {
        debugger
        authenticateUser(email, password, function (error, {id,token}) {
            
            if (error) {
                if (error.message === `user with username "${email}" does not exist`) {
                    feedback.render('User not registred. Please, sign up first')
                } else { feedback.render(error.message) }
        
            } else {
                
                retrieveUser(id,token,function(user){
                    debugger
                    var name = user.data.name
                    var surname = user.data.surname
                    var userInfo = document.getElementsByClassName('home__welcome')[0]
                    userInfo.innerHTML = `Welcome ${name} ${surname}`;

                })
                log.style.display = 'none'
                nav.style.display = 'flex'
                main.style.display = 'flex'

            }
        })
    })

})()

initRandomDucks();

function initRandomDucks() {
    searchDucks('', '', function (ducks) {
        ducks = ducks.shuffle().slice(0, 6);
        list.render(ducks);

    })
};

var search = new Search(document.getElementsByClassName('navigation')[0]);
search.onSubmit(searchRequest)

function searchRequest(query) {
    searchDucks(query, '', list.render);
}

var list = new List(document.getElementsByClassName("results__content"));
list.onItemCreate = function () {
    var item = new Item(document.createElement('article'));

    item.onClick = function (id) {
        getDuck(id, '', function (duck) {

            var detail = new Detail(document.getElementsByClassName("details")[0]);
            detail.render(duck)

        });
    }

    return item;
}

var feedback = new Feedback(document.getElementsByClassName('feedback')[0]);