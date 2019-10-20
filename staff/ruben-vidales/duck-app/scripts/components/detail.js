function Detail(container) {
    this.__container__ = container;
}

Detail.prototype.render = function (duck) {
    this.__container__.innerHTML = '';

    var article = document.createElement('article');
    article.classList.add('duck');

    var title = document.createElement('h3');
    title.classList.add('duck__title');
    title.innerText = duck.title;

    var img = document.createElement('img');
    img.classList.add('duck__image');
    img.src = duck.imageUrl;

    var descript = document.createElement('p');
    descript.classList.add('duck__description');
    descript.innerText = duck.description;

    var price = document.createElement('p');
    price.classList.add('duck__price');
    price.innerText = duck.price;

    var store = document.createElement('a');
    store.classList.add('duck__store-button');
    store.innerText = 'Go to Shop';
    store.href = duck.link;
    store.setAttribute('target', '_blank');

    var back = document.createElement('button');
    back.classList.add('duck__back-button');
    back.innerText = 'Back';
    back.addEventListener('click', function (e) { 
        //goBack() 
    });

    article.append(title);
    article.append(img);
    article.append(descript);
    article.append(store);
    article.append(price);
    article.append(back);

    this.__container__.append(article);  
};