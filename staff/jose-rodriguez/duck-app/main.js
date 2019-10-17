if (typeof Array.prototype.shuffle === 'undefined')
    Array.prototype.shuffle = function() {
        var result = [];

        for (var i = 0; i < this.length; i++) result[i] = this[i];

        for (var i = 0; i < result.length; i++) {
            var random = Math.floor(Math.random() * result.length); // 0 <> length-1

            var value = result[i];

            result[i] = result[random];

            result[random] = value;
        }

        //result[0] = ':P';

        return result;
    }

initRandomDucks();

var search = document.getElementsByClassName('navigation__content')[0]
search.addEventListener('submit', function (e) {
    var query = this.q.value
    e.preventDefault();
    searchRequest(query);
})

function initRandomDucks() {
    searchDucks('', function (ducks) {
        ducks = ducks.shuffle().slice(0,6);
        createListDuck(ducks);
    })
}

function searchDucks (query,callback) {
    request('GET', query ? 'https://duckling-api.herokuapp.com/api/search?q=' + query : 'https://duckling-api.herokuapp.com/api/search?q=', callback);
}

function searchRequest(query) {
    searchDucks(query,createListDuck);
}

function createListDuck(ducks) {

    var results = document.getElementById("results");
    var div = document.createElement('div');
    results.innerHTML = "";
    results.append(div);

    ducks.forEach(function (duck) {
        //DECLARACION DE ELEMENTOS HTML CREADOS DONDE UBICAREMOS LOS DATOS OBTENIDOS DEL JSON

        var article = document.createElement("article");
        var img = document.createElement('img');
        var title = document.createElement('h3');
        var price = document.createElement('p');
        var link = document.createElement('a');

        //ASIGNACION DE ATRIBUTOS A LOS ELEMENTOS LINK E IMG
        
        article.className = "article__content"
        link.href = '#' + duck.id;
        img.src = duck.imageUrl;

        //INTRODUCCION DEL TEXTO QUE SE MOSTRARÁ EN PANTALLA PARA EL TITULO Y EL PRECIO

        title.innerHTML = duck.title;
        price.innerHTML = duck.price;

        //ORGANIZACION DE LOS ELEMENTOS HTML MOSTRADOS.
        //IMG,TITLE Y PRICE DENTRO DE LINK
        //LINK DENTRO DE LI

        link.append(img)
        article.append(link, title, price)
        div.append(article)

        link.addEventListener('click', function (e) {
            e.preventDefault();
            var id = duck.id;
            getDuck(id,openDuck);
        })
    })

}

function getDuck (id,callback) {
    request('GET', 'https://duckling-api.herokuapp.com/api/ducks/' + id, callback)
}


function openDuck(duck) {

    document.getElementById("results").style.display = 'none';
    document.getElementById("searching").style.display = 'none';
    document.getElementById("details").style.display = 'block';
 
    var details = document.getElementById("details");
    details.innerHTML = "";
    var article = document.createElement('article');
    details.append(article)

    var img = document.createElement('img');
    img.src = duck.imageUrl;
    img.id = "img__detail";

    var title = document.createElement('h3');
    title.innerHTML = duck.title;
    title.className = "detail__title";

    var description = document.createElement('p');
    description.innerHTML = duck.description;

    var container = document.createElement('div');
    container.className = "container";

    var showOps = document.createElement('div');
    showOps.className = "show__options";

    var price = document.createElement('div');
    price.className = "price__detail";
    price.innerHTML = duck.price;

    var back = document.createElement('div')
    back.className = "back__button";
    back.innerHTML = "Go back";
                
    showOps.append(description)
    showOps.append(price)
    showOps.append(back)
    container.append(img);
    container.append(showOps);
    article.append(title);
    article.append(container);
    
    back.addEventListener('click', function () {
        document.getElementById("results").style.display = 'block';
        document.getElementById("searching").style.display = 'block';
        document.getElementById("details").style.display = 'none';

           
    })
}

function request (method,url,callback) {
    fetch(method,url,function(response){
        if (response.readyState == 4 && response.status == 201) {
            var results = JSON.parse(response.responseText);
            callback(results);
        }
    })
};

function fetch (method, url, callback) {
    var xhr = new XMLHttpRequest;
    xhr.open(method,url);
    xhr.onreadystatechange = function () {
        callback(this)
    };
    xhr.send();
}
