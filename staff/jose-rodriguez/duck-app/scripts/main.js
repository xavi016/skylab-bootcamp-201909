(function login(){
    document.getElementById("searching").style.display = 'none';
    document.getElementById("results").style.display = 'none';

    var login = document.getElementsByClassName('login__form')[0];
    
    login.addEventListener('submit', function(e){
        e.preventDefault();

        var email = this.email.value;
        var password = this.password.value;

        if (!(email == 'pepito.grillo@mail.com') && !(password == '123')) {
            throw Error (TypeError + ' invalid user/password');
        }

        if (error){
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
})()


function initRandomDucks() {
    searchDucks('', function (ducks) {
        ducks = ducks.shuffle().slice(0, 6);
        list.render(ducks);
        
    })
};

var search = new Search(document.getElementsByClassName('navigation__content')[0]);
search.onSubmit(searchRequest)

function searchRequest(query) {
    searchDucks(query, list.render);
}

var list = new List(document.getElementById("results"));
list.onItemCreate = function () {
    var item = new Item(document.createElement('article'));

    item.onClick = function (id) {
        getDuck(id,function (duck){
        
            var detail = new Detail(document.getElementById("details"));
            detail.render(duck)

        });
    }

    return item;
}
