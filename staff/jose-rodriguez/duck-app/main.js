var xhr = new XMLHttpRequest;
xhr.open('GET', 'https://duckling-api.herokuapp.com/api/search?q=');
xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 201) {
        var ducks = JSON.parse(xhr.responseText);
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
        
        var ul = document.createElement('ul');
        var li = document.createElement('li');
        var img = document.createElement('img');
        var title = document.createElement('h3');
        var price = document.createElement('p');
        var link = document.createElement('a');
        var id;
        

        //ASIGNACION DE ATRIBUTOS A LOS ELEMENTOS LINK E IMG

        link.href = '#' + duck.id;
        img.src = duck.imageUrl;

        //INTRODUCCION DEL TEXTO QUE SE MOSTRARÁ EN PANTALLA PARA EL TITULO Y EL PRECIO

        title.innerHTML = duck.title;
        price.innerHTML = duck.price;
        ul.className = "duck__content"
        id = duck.id;
        

        //ORGANIZACION DE LOS ELEMENTOS HTML MOSTRADOS.
        //IMG,TITLE Y PRICE DENTRO DE LINK
        //LINK DENTRO DE LI

        li.append(img);
        li.append(title);
        li.append(price);
        link.append(li);
        ul.append(link);
        div.append(ul)
        
        link.addEventListener('click', function () {
        openDuck(id)
        })
    })

}

document.getElementById('search').addEventListener('submit', function (e) {
    e.preventDefault();
    searchRequest();
    
})

// document.getElementById('button').addEventListener('click', function () {
//     searchRequest();
// })

function searchRequest() {
    
    var request = new XMLHttpRequest;
    var input = document.getElementById('search');
    request.open('GET', 'https://duckling-api.herokuapp.com/api/search?q='+input.value);
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
            var ul = document.createElement('ul');
            details.append(ul)

            if (this.readyState == 4 && this.status == 201) {
                var duck = JSON.parse(newReq.responseText);
                var li = document.createElement('li');
                var img = document.createElement('img');
                img.src = duck.imageUrl;
                var title = document.createElement('h3');
                title.innerHTML = duck.title;
                var prc = document.createElement('div');
                prc.className = "duck__price";
                prc.innerHTML = duck.price;
                var description = document.createElement('p');
                description.innerHTML = duck.description;

                li.append(title);
                li.append(img);
                li.append(description);
                li.append(prc);
                ul.append(li);

                div = document.createElement('div')
                div.innerHTML = "Go back"
                details.append(div)
                div.addEventListener('click', function(){
                    document.getElementById("results").style.display = 'block';
                    document.getElementById("searching").style.display = 'block';
                    document.getElementById("details").style.display = 'none';
                })
            }
        }
        newReq.send();
    }

