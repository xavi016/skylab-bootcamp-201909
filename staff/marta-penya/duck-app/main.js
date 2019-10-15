var button = document.getElementsByClassName('search__form');
var item = document.getElementsByClassName('ducks');
var input = document.getElementById('search__formitem');
var result = document.getElementsByClassName('result');

button[0].addEventListener('submit', function (e) {
    e.preventDefault();
    
    item[0].innerHTML = "";
   
    var xhr = new XMLHttpRequest;

    xhr.open('GET', 'https://duckling-api.herokuapp.com/api/search?q=' + input.value);

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            var ducks = JSON.parse(xhr.responseText);

            var ul = document.createElement('ul');
            ul.classList.add('duck-list');

            

            item[0].append(ul);

            ducks.forEach(function (duck) {
                var link = document.createElement('a');
                link.classList.add('duck-list__link');
                link.addEventListener('click', function (e) {showItem(duck.id)} );

                var li = document.createElement('li');
                li.classList.add('duck-list__duck');

                var img = document.createElement('img');
                img.classList.add('duck-list__image');
                img.src = duck.imageUrl;
                

                var h2 = document.createElement('h2');
                h2.classList.add('duck-list__title');
                h2 = duck.title;
                

                var p = document.createElement('p');
                p.classList.add('duck-list__price');
                p = duck.price;
                


                link.append(h2);
                link.append(img);
                link.append(p);

                li.append(link);

                ul.append(li);
            });
        }
    };

    xhr.send();
    
    
});






var result = document.getElementsByClassName('result');

function showItem(id){


    var xhr = new XMLHttpRequest;

    xhr.open('GET', 'http://duckling-api.herokuapp.com/api/ducks/'+ id);

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            item[0].innerHTML = "";

            var duck = JSON.parse(xhr.responseText);

            var div = document.createElement('div');
            div.classList.add('duck-list');

            result[0].append(div);    


            var img = document.createElement('img');
            img.classList.add('duck-list__image');
            img.src = duck.imageUrl;
                

            var h2 = document.createElement('h2');
            h2.classList.add('duck-list__title');
            h2 = duck.title;
                

            var price = document.createElement('p');
            price.classList.add('duck-list__price');
            price = duck.price;

            var desc = document.createElement('p');
            desc.classList.add('duck-list__description');
            desc = duck.description;
            
            var button = document.createElement('button');
            button.classList.add('duck-list__button');
            button.innerText = 'Back';
            button.addEventListener('click', function(){ backtothefuture() });

            div.append(h2);
            div.append(img);
            div.append(desc);
            div.append(price);
            div.append(button);

        }
    };

    xhr.send();    
}



function backtothefuture(){
    result[0].innerHTML = '';

}
