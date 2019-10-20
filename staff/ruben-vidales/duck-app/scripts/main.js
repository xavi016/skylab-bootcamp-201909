var searchInput = document.getElementsByClassName('form__part-input')[0];

//var detailPanel = document.getElementsByClassName('detail-panel')[0];

var ducksPanel = new Results(document.getElementsByClassName('ducks-panel__list')[0]); 

listInitialRandomDucks();
function listInitialRandomDucks() {
    searchDucks('', function (ducks) {
        ducks = ducks.shuffle().splice(0, 6);
        paintResults(ducks);
    });
}

function paintResults(ducks) {
    ducksPanel.render(ducks);
}


var search = new Search(document.getElementsByClassName('header__form')[0]);
search.onSubmit(listSearchResults);


function listSearchResults(query) {
    searchDucks(query, paintResults);
}

ducksPanel.onItemClick = function(duck) {
    var detail = new Detail(document.getElementsByClassName('detail-panel')[0]);
    detail.render(duck);

    /*
    var views = document.getElementsByClassName('view');

    views[0].classList.add('hide');
    views[1].classList.remove('hide');
    */
};

/**
 * Print a detail of a duck
 * @param {*} duck 
 */
/*
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
*/




