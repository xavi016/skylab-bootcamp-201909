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






// function openDuck(duck) {

//     document.getElementById("results").style.display = 'none';
//     document.getElementById("searching").style.display = 'none';
//     document.getElementById("details").style.display = 'block';

//     var details = document.getElementById("details");
//     details.innerHTML = "";
//     var article = document.createElement('article');
//     details.append(article)

//     var img = document.createElement('img');
//     img.src = duck.imageUrl;
//     img.id = "img__detail";

//     var title = document.createElement('h3');
//     title.innerHTML = duck.title;
//     title.className = "detail__title";

//     var description = document.createElement('p');
//     description.innerHTML = duck.description;

//     var container = document.createElement('div');
//     container.className = "container";

//     var showOps = document.createElement('div');
//     showOps.className = "show__options";

//     var price = document.createElement('div');
//     price.className = "price__detail";
//     price.innerHTML = duck.price;

//     var back = document.createElement('div')
//     back.className = "back__button";
//     back.innerHTML = "Go back";

//     showOps.append(description)
//     showOps.append(price)
//     showOps.append(back)
//     container.append(img);
//     container.append(showOps);
//     article.append(title);
//     article.append(container);

//     back.addEventListener('click', function () {
//         document.getElementById("results").style.display = 'block';
//         document.getElementById("searching").style.display = 'block';
//         document.getElementById("details").style.display = 'none';
//     })
// }
