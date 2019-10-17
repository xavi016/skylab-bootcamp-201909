var searchInput = document.getElementsByClassName('form__part-input')[0];
var searchForm = document.getElementsByClassName('header__form')[0];
var ducksPanel = document.getElementsByClassName('ducks-panel')[0];
var detailPanel = document.getElementsByClassName('detail-panel')[0];

var searchResult;

searchForm.addEventListener('submit', function (e) {

    e.preventDefault();

    var xhr = new XMLHttpRequest;
    var url = 'https://duckling-api.herokuapp.com/api/search?q=' + searchInput.value;
    xhr.open('GET', url);

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            var ducks = JSON.parse(xhr.responseText);

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
    };

    xhr.send();
});

function showDetail(id) {

    ducksPanel.classList.add('hide')

    detailPanel.innerHTML = '';

    var xhr = new XMLHttpRequest;
    var url = 'https://duckling-api.herokuapp.com/api/ducks/' + id;
    xhr.open('GET', url);

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            var duck = JSON.parse(xhr.responseText);

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

            var back = document.createElement('button');
            back.classList.add('duck__back-button');
            back.innerText = 'Back';
            back.addEventListener('click', function(e){ goBack() });

            article.append(title);
            article.append(img);
            article.append(descript);
            article.append(price);
            article.append(back);

            detailPanel.append(article);
            detailPanel.classList.remove('hide');
        }
    };

    xhr.send();

}

function goBack () {
    ducksPanel.classList.remove('hide');
    detailPanel.classList.add ('hide');
}