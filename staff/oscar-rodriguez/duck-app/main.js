var currentPage =1;
var _form = document.getElementsByClassName("form-0");

_form[0].addEventListener('submit', search);

var ducksRequest = new XMLHttpRequest;
ducksRequest.open('GET', 'https://duckling-api.herokuapp.com/api/search?q=');

ducksRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 201) {
        var ducks = JSON.parse(ducksRequest.responseText);
        createList(ducks);
    }
};
ducksRequest.send();


function createList (ducks) {
    var ducksList = document.getElementById("search-list");
    ducksList.innerHTML="";
    
    var ul = document.createElement('ul');
    ul.className ="search-list";

    ducksList.append(ul);
    
    ducks.forEach(function(duck) {

            var li = document.createElement('li');
            li.className = "search-list__entry entry";
            var img = document.createElement('img');
            img.src = duck.imageUrl;
            img.className = "entry__img";
            var title = document.createElement('div');
            title.className = "entry__tittle";
            title.innerHTML = duck.title;
            var price = document.createElement('div');
            price.innerHTML = duck.price;
            price.className = "entry__price";

            li.append(img);
            li.append(title);
            li.append(price);
            
            var link = document.createElement("a");

            link.className="link";
            link.href="#"+duck.id;
            link.addEventListener('click',function (event){
                    openDuck(duck.id)});

            link.append(li);
            ul.append(link);
    
    });
}

function openDuck (id) {

    var list_Panel = document.getElementById("search-list");
    list_Panel.style.display = "none";
    var duck_Panel = document.getElementById("duck-detail");
    duck_Panel.innerHTML = "";
    duck_Panel.style.display = "flex";


    
    var duckRequest = new XMLHttpRequest;
    duckRequest.open('GET', 'http://duckling-api.herokuapp.com/api/ducks/'+id);
    duckRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 201) {
            
            var duckInfo = JSON.parse(duckRequest.responseText);

            var title = document.createElement("h1");
            title.className = "duck-detail__title";
            title.innerHTML=duckInfo.title;
            var description = document.createElement("p");
            description.className = "duck-detail__description";
            description.innerHTML=duckInfo.description;
            var image = document.createElement("img");
            image.className = "duck-detail__image";
            image.src=duckInfo.imageUrl;
            var price = document.createElement("div");
            price.className = "duck-detail__price";
            price.innerHTML = duckInfo.price;
            var link = document.createElement("a");
            link.className = "link";
            link.innerHTML = "Go to Duck's shopping page";
            link.href = duckInfo.link;

            var back = document.createElement("button");
            back.innerHTML="Atrás";
            back.className = "duck-detail__back"
            back.addEventListener('click', function (){
                list_Panel.style.display = "flex";
                duck_Panel.style.display = "none";
            })

            duck_Panel.append(title);
            duck_Panel.append(back);
            duck_Panel.append(description);
            duck_Panel.append(image);
            duck_Panel.append(price);
            duck_Panel.append(link);
            

        }
    };
    duckRequest.send();
}

function search(e) {
    e.preventDefault()
    debugger
    var ducksRequest = new XMLHttpRequest;
    var search = document.getElementById("search_box").value;
    var duck_Panel = document.getElementById("duck-detail");
    var list_Panel = document.getElementById("search-list");

    if (duck_Panel.style.display !== "none") {
        duck_Panel.style.display = "none";
        list_Panel.style.display = "flex";
    }

    ducksRequest.open('GET', 'https://duckling-api.herokuapp.com/api/search?q='+search);
    
    ducksRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 201) {
            var ducks = JSON.parse(ducksRequest.responseText);
            
            createList(ducks);
        }
    };
    ducksRequest.send();
    
}


