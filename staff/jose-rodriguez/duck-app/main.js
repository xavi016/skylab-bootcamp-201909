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


var xhr = new XMLHttpRequest;
xhr.open('GET', 'https://duckling-api.herokuapp.com/api/search?q=');
xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 201) {
        var ducks = JSON.parse(xhr.responseText);

        ducks = ducks.shuffle().slice(0,6);
        createListDuck(ducks);
    }
}
xhr.send();

function createListDuck(obj) {

    var results = document.getElementById("results");
    var div = document.createElement('div');
    results.innerHTML = "";
    results.append(div);

    obj.forEach(function (duck) {
        //DECLARACION DE ELEMENTOS HTML CREADOS DONDE UBICAREMOS LOS DATOS OBTENIDOS DEL JSON

        var article = document.createElement("article");
        var img = document.createElement('img');
        var title = document.createElement('h3');
        var price = document.createElement('p');
        var link = document.createElement('a');
        var id;
        
        
        //ASIGNACION DE ATRIBUTOS A LOS ELEMENTOS LINK E IMG
        
        article.className = "article__content"
        link.href = '#' + duck.id;
        img.src = duck.imageUrl;


        //INTRODUCCION DEL TEXTO QUE SE MOSTRARÁ EN PANTALLA PARA EL TITULO Y EL PRECIO

        title.innerHTML = duck.title;
        price.innerHTML = duck.price;
        id = duck.id;


        //ORGANIZACION DE LOS ELEMENTOS HTML MOSTRADOS.
        //IMG,TITLE Y PRICE DENTRO DE LINK
        //LINK DENTRO DE LI


        link.append(img)
        article.append(link)
        article.append(title)
        article.append(price)
        div.append(article)


        link.addEventListener('click', function () {
            openDuck(id)
        })
    })

}

var search = document.getElementsByClassName('navigation__content')[0]
search.addEventListener('submit', function (e) {
    var query = this.q.value
    e.preventDefault();
    searchRequest(query);
})

function searchRequest() {

    var request = new XMLHttpRequest;
    var input = document.getElementById('search');
    request.open('GET', 'https://duckling-api.herokuapp.com/api/search?q=' + input.value);
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            var ducks = JSON.parse(request.responseText);
            createListDuck(ducks);
        }
    }
    request.send();
}

function openDuck(id) {

    document.getElementById("results").style.display = 'none';
    document.getElementById("searching").style.display = 'none';
    document.getElementById("details").style.display = 'block';
    var newReq = new XMLHttpRequest;
    newReq.open('GET', 'http://duckling-api.herokuapp.com/api/ducks/' + id);
    newReq.onreadystatechange = function () {
        var details = document.getElementById("details");
        details.innerHTML = "";
        var article = document.createElement('article');
        details.append(article)

        if (this.readyState == 4 && this.status == 201) {
            var duck = JSON.parse(newReq.responseText);
            var img = document.createElement('img');
            var title = document.createElement('h3');
            var description = document.createElement('p');
            var container = document.createElement('div');
            var showOps = document.createElement('div');
            var price = document.createElement('div');
            var back = document.createElement('div')
            
            description.innerHTML = duck.description;
            container.className = "container";
            showOps.className = "show__options";
            title.innerHTML = duck.title;
            title.className = "detail__title";
            img.src = duck.imageUrl;
            img.id = "img__detail"
            price.className = "price__detail";
            price.innerHTML = duck.price;
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
    }
    newReq.send();
}

