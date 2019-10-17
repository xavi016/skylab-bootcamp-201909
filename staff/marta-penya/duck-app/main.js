// presentation

listInitialRandomDucks();

var button = new Search(document.getElementsByClassName('search__form')[0]);
button.onSubmit(listSearchResults);

// button[0].addEventListener('submit', function (event) {
//     event.preventDefault();

//     var query = this.query.value;

//     listSearchResults(query);
// });


function listInitialRandomDucks() {
    searchDucks('', function(ducks){
        ducks = ducks.shuffle().splice(0, 3);

        paintResults(ducks);
    });
    // searchDucks('', function (ducks) {
    //     ducks = ducks.shuffle().splice(0, 3);

    //     paintResults(ducks);
    // });
}

function listSearchResults(query) {
    searchDucks(query, paintResults);
}


function paintResults(ducks) {
    results.render(ducks);
    // var item = document.getElementsByClassName('ducks');
            
    // item[0].innerHTML = '';

    // var ul = document.createElement('ul');
    // ul.classList.add('duck-list');

    // item[0].append(ul);

    // ducks.forEach(function (duck) {
    //     var li = document.createElement('li');
    //     li.classList.add('duck-list__duck');

    //     var link = document.createElement('a');
    //     link.classList.add('duck-list__link');
    //     link.addEventListener('click', function (event) {
    //         item[0].style.display = "none";
    //         var id = duck.id;

    //         retrieveDuck(id, paintDetail);
    //     });
    //     li.append(link);

    //     var h2 = document.createElement('h2');
    //     var text = document.createTextNode(duck.title);
    //     h2.classList.add('duck-list__title');
    //     h2.appendChild(text);

    //     var img = document.createElement('img');
    //     img.classList.add('duck-list__image');
    //     img.src = duck.imageUrl;

    //     var price = document.createElement('p');
    //     var pric = document.createTextNode(duck.price);
    //     price.classList.add('duck-list__price');
    //     price.appendChild(pric);

    //     link.append(h2, img, price);
                
    //     ul.append(li);
    // });
}

var item = new Results(document.getElementsByClassName('ducks')[0]);

item.onItemClick = function(duck){
    var result = new Detail(document.getElementsByClassName('result')[0])
    result.render(duck);

    var views = document.getElementsByClassName('view');

    views[0].classList.add('hide');
    views[1].classList.remove('hide');
}


function paintResults(ducks) {
    item.render(ducks);
}

// function paintDetail(duck) {
//     var result = document.getElementsByClassName('result');

//     var div = document.createElement('div');
//     div.classList.add('duck-list--modif');
//     result[0].append(div);    

    
//     var h2 = document.createElement('h2');
//     var text = document.createTextNode(duck.title);
//     h2.classList.add('duck-list__title');
//     h2.classList.add('duck-list__title--modif');
//     h2.appendChild(text);

//     var img = document.createElement('img');
//     img.classList.add('duck-list__image');
//     img.classList.add('duck-list__image--modif');
//     img.src = duck.imageUrl;

//     var desc = document.createElement('p');
//     var description = document.createTextNode(duck.description);
//     desc.classList.add('duck-list__description');
//     desc.appendChild(description);

//     var store = document.createElement('a');
//     store.classList.add('duck-list__store');
//     store.innerText = 'Store';

//     var price = document.createElement('p');
//     var pric = document.createTextNode(duck.price);
//     price.classList.add('duck-list__price');
//     price.classList.add('duck-list__price--modif');
//     price.appendChild(pric);

//     var button = document.createElement('button');
//     button.classList.add('duck-list__button');
//     button.innerText = 'Back';
//     button.addEventListener('click', function (event) {
//         var views = document.getElementsByClassName('view');
//         var item = document.getElementsByClassName('ducks');

//         result[0].innerHTML='';
//         item[0].style.display = "flex";

//         views[0].classList.remove('hide');
//         views[1].classList.add('hide');
//     });

//     div.append(h2);
//     div.append(img);
//     div.append(desc);
//     div.append(store);
//     div.append(price);
//     div.append(button);

//     var views = document.getElementsByClassName('view');

//     views[0].classList.add('hide');
//     views[1].classList.remove('hide');
// }




