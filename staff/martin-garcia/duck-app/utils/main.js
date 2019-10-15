var myForm = document.getElementsByClassName('myForm');
var searchElement = document.getElementsByClassName('search')[0];
var resultElement = document.getElementsByClassName('result')[0];
resultElement.hidden = true;

search();


function search(e) {
    var textToFind = myForm[0][0].value;

    var xhr = new XMLHttpRequest;
    xhr.open('GET', 'https://duckling-api.herokuapp.com/api/search?q=' + textToFind);
    xhr.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 201) {
            var ducks = JSON.parse(xhr.responseText);

            constructSearchHtml(ducks);
        }
    };

    xhr.send();

    if (typeof e === undefined)
        e.preventDefault();
}


function constructSearchHtml(ducks) {

    var container = document.getElementsByClassName('search__main');
    container = container[0];
    container.innerHTML = "";
    ducks.forEach(function(duck) {

        var article = document.createElement('article');
        article.className = 'main__article article';

        article.setAttribute('onclick', "constructResultHtml('" + duck.id + "')");
        //article.addEventListener('click', constructResultHtml(duck.id));

        var title = document.createElement('p');
        title.className = 'article__title';
        title.innerText = duck.title;

        var image = document.createElement('img');
        image.className = 'article__image';
        image.src = duck.imageUrl;

        var price = document.createElement('p');
        price.className = 'article__price';
        price.innerText = duck.price;

        article.append(title, image, price);
        container.append(article);
    });
}



function constructResultHtml(id) {
    searchElement.hidden = true;
    resultElement.hidden = false;

    var xhr = new XMLHttpRequest;

    xhr.open('GET', 'https://duckling-api.herokuapp.com/api/ducks/' + id);

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 201) {
            var duck = JSON.parse(xhr.responseText);
            var container = document.getElementsByClassName('result__main');
            container = container[0];
            container.innerHTML = "";

            var article = document.createElement('article');
            article.className = 'main__article article';


            var title = document.createElement('p');
            title.className = 'article__title';
            title.innerText = duck.title;

            var image = document.createElement('img');
            image.className = 'article__image';
            image.src = duck.imageUrl;

            var price = document.createElement('p');
            price.className = 'article__price';
            price.innerText = duck.price;


            var description = document.createElement('p');
            description.className = 'article__description';
            description.innerText = duck.description;

            article.append(title, image, description, price);
            container.append(article);
        }
    };

    xhr.send();
}


function goBack() {
    searchElement.hidden = false;
    resultElement.hidden = true;
}