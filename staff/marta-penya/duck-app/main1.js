if (typeof Array.prototype.shuffle === 'undefined')
    Array.prototype.shuffle = function () {
        var result = [];

        for (var i = 0; i < this.length; i++) result[i] = this[i];

        for (var i = 0; i < result.length; i++) {
            var random = Math.floor(Math.random() * result.length);

            var value = result[i];

            result[i] = result[random];

            result[random] = value;
        }

        return result;
    };



var xhr = new XMLHttpRequest;

xhr.open('GET', 'https://duckling-api.herokuapp.com/api/search');

xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 201) {
        var ducks = JSON.parse(xhr.responseText);

        ducks = ducks.shuffle().splice(0, 3);


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
            var text = document.createTextNode(duck.title);
            h2.classList.add('duck-list__title');
            h2.appendChild(text);
                
            
            var price = document.createElement('p');
            var pric = document.createTextNode(duck.price);
            price.classList.add('duck-list__price');
            price.appendChild(pric);
            


            link.append(h2);
            link.append(img);
            link.append(price);

            li.append(link);

            ul.append(li);
        });
    } 
};

xhr.send();




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
                var text = document.createTextNode(duck.title);
                h2.classList.add('duck-list__title');
                h2.appendChild(text);
                    
                
                var price = document.createElement('p');
                var pric = document.createTextNode(duck.price);
                price.classList.add('duck-list__price');
                price.appendChild(pric);
                


                link.append(h2);
                link.append(img);
                link.append(price);

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
            div.classList.add('duck-list--modif');

            result[0].append(div);    


            var img = document.createElement('img');
            img.classList.add('duck-list__image');
            img.classList.add('duck-list__image--modif');
            img.src = duck.imageUrl;
                

            var h2 = document.createElement('h2');
            var text = document.createTextNode(duck.title);
            h2.classList.add('duck-list__title');
            h2.classList.add('duck-list__title--modif');
            h2.appendChild(text);
                

            var price = document.createElement('p');
            var pric = document.createTextNode(duck.price);
            price.classList.add('duck-list__price');
            price.classList.add('duck-list__price--modif');
            price.appendChild(pric);

            var desc = document.createElement('p');
            var description = document.createTextNode(duck.description);
            desc.classList.add('duck-list__description');
            desc.appendChild(description);
            
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
    var result = document.getElementsByClassName('result');
    var item = document.getElementsByClassName('ducks');
    
    result[0].classList.remove('hide');
    item[0].classList.add('hide');

}
