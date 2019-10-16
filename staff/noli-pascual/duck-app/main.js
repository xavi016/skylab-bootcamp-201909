
    
        
 var input = document.getElementsByClassName('ducks__input')[0];
 var buttonRequest = document.getElementsByClassName('ducks__form')[0];
 var detailDuck = document.getElementsByClassName('main__detail')[0];
 var ducksContainer = document.getElementsByClassName('ducks')[0];
 var duckDetailContainer = document.getElementsByClassName('duck')[0];

var search = function() {
     
    
    var newRequest = new XMLHttpRequest;

    newRequest.open('GET', 'http://duckling-api.herokuapp.com/api/search?q=' + input.value);

    newRequest.onreadystatechange = function() {

        if(this.readyState == 4 && this.status == 201) {
    
            var ducks = JSON.parse(newRequest.responseText);
            printDucks(ducks);
        }

    }
    newRequest.send();
    
}

var printDucks = function(ducks) {
    // var list = document.createElement('div');
    var list = document.getElementsByClassName('ducks__list')[0];
         
    var ul = document.createElement('ul');
    list.innerHTML = '';
    
    // document.body.append(list);
    list.append(ul);
    
    ducks.forEach(function(duck) {
        var li = document.createElement('li');
        var img = document.createElement('img');
        var title = document.createElement('h3');
        var price = document.createElement('p');

        img.src = duck.imageUrl;
        title.innerText = duck.title;
        price.innerText = duck.price;
        li.classList.add('ducks__figure');
        li.append(img, title, price);
        ul.append(li);

        li.addEventListener('click', function(e) {
           ducksContainer.style.display = 'none';
           e.preventDefault();
           searchDuck(duck.id);

        })
        
    });
}

var searchDuck = function(duckId) {
    var detailReq = new XMLHttpRequest;
    detailReq.open('GET', 'http://duckling-api.herokuapp.com/api/ducks/' + duckId);

    detailReq.onreadystatechange = function() {

        if(this.readyState == 4 && this.status == 201) {

            

            var duck = JSON.parse(detailReq.responseText);
            
            printDuck(duck);
            

        };
    }
    detailReq.send();
}

var printDuck = function(duck) {
    duckDetailContainer.innerHTML = '';
    var title = document.createElement('h1');
    var img = document.createElement('img');
    var price = document.createElement('h4');
    var description = document.createElement('p');
    var backButton = document.createElement('button');
        backButton.classList.add('duck__button');
        backButton.innerText = "Go back";

        backButton.addEventListener('click', function() {
            ducksContainer.style.display = 'block';
            
        })

    title.innerText = duck.title;
    title.classListadd('duck__title');
    img.src = duck.imageUrl;
    price.innerText = duck.price;
    description.innerText = duck.description;
    description.classList.add('duck__description');

    duckDetailContainer.append(title, img, price, description, backButton);
    
}

buttonRequest.addEventListener('click', function(event) {
    
    event.preventDefault();
    search()
});
