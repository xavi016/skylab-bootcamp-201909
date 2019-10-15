var myForm = document.getElementsByClassName('myForm');
var searchElement = document.getElementsByClassName('search')[0];
var resultElement = document.getElementsByClassName('result')[0];
resultElement.hidden = true;


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

    e.preventDefault();
}


function constructSearchHtml(ducks) {

    var container = document.getElementsByClassName('search__main');
    container = container[0];
    container.innerHTML = "";
    ducks.forEach(function(duck) {

        var article = document.createElement('article');
        article.className = 'main__article article';

        article.setAttribute('onclick', "constructResultHtml('" + duck.title + "', '" + duck.imageUrl + "','" + duck.price + "')");

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



function constructResultHtml(titleText, imageText, priceText) {
    searchElement.hidden = true;
    resultElement.hidden = false;

    var container = document.getElementsByClassName('result__main');
    container = container[0];
    container.innerHTML = "";

    var article = document.createElement('article');
    article.className = 'main__article article';


    var title = document.createElement('p');
    title.className = 'article__title';
    title.innerText = titleText;

    var image = document.createElement('img');
    image.className = 'article__image';
    image.src = imageText;

    var price = document.createElement('p');
    price.className = 'article__price';
    price.innerText = priceText;

    article.append(title, image, price);
    container.append(article);

}


function goBack() {
    searchElement.hidden = false;
    resultElement.hidden = true;
}