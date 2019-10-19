var searchInput = document.getElementsByClassName('form__part-input')[0];
var searchForm = document.getElementsByClassName('header__form')[0];
var ducksPanel = document.getElementsByClassName('ducks-panel')[0];
var detailPanel = document.getElementsByClassName('detail-panel')[0];

listInitialRandomDucks();

searchForm.addEventListener('submit', function (e) {

    e.preventDefault();
    var url = 'https://duckling-api.herokuapp.com/api/search?q=' + searchInput.value;
    fetch('GET', url, paintResults);
});

function showDetail(id) {
    detailPanel.innerHTML = '';
    var url = 'https://duckling-api.herokuapp.com/api/ducks/' + id;
    fetch('GET', url, paintDetail);    

}

function goBack() {
    ducksPanel.classList.remove('hide');
    detailPanel.classList.add('hide');
}



/**
 * Print the results of the search
 * @param {*} ducks 
 */
function paintResults(ducks) {
    var ul = document.createElement('ul');
    ul.classList.add('ducks-panel__list')
    document.body.append(ul);

    ducks.forEach(function (duck) {
        var li = document.createElement('li');
        li.classList.add('ducks-panel__list-item')

        var link = document.createElement('a');
        link.addEventListener('click', function (e) { showDetail(duck.id) });

        var article = document.createElement('article');
        article.classList.add('duck');

        var title = document.createElement('h3');
        title.classList.add('duck__title');
        title.innerText = duck.title;

        var img = document.createElement('img');
        img.classList.add('duck__image');
        img.src = duck.imageUrl;

        var price = document.createElement('p');
        price.classList.add('duck__price');
        price.innerText = duck.price;

        article.append(title);
        article.append(img);
        article.append(price);

        link.append(article);

        li.append(link);

        ul.append(li);
    });
    ducksPanel.innerHTML = '';
    detailPanel.innerHTML = '';
    ducksPanel.append(ul);

    ducksPanel.classList.remove('hide');
}

/**
 * Print a detail of a duck
 * @param {*} duck 
 */
function paintDetail(duck) {

    detailPanel.innerHTML = '';

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
    back.addEventListener('click', function (e) { goBack() });

    article.append(title);
    article.append(img);
    article.append(descript);
    article.append(store);
    article.append(price);
    article.append(back);

    detailPanel.append(article);

    ducksPanel.classList.add('hide');
    detailPanel.classList.remove('hide');
}


function listInitialRandomDucks() {
    searchDucks('', function (ducks) {
        ducks = ducks.shuffle().splice(0, 4);

        paintResults(ducks);
    });
}

function searchDucks(query, callback) {
    q = query ? 'https://duckling-api.herokuapp.com/api/search?q=' + query : 'https://duckling-api.herokuapp.com/api/search';
    fetch('GET', q, callback);
}
