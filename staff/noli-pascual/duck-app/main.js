
    
        
 var input = document.getElementById('input');
 var buttonRequest = document.getElementById('form-button');
 var detailDuck = document.getElementsByClassName('main__detail')[0];
 var ducksContainer = document.getElementsByClassName('main__ducks-container')[0];

var peticion = function() {
        //Ajax Code
    //DECLARE VARIABLE
    
    var newRequest = new XMLHttpRequest;

    newRequest.open('GET', 'http://duckling-api.herokuapp.com/api/search?q=' + input.value);

        // GET. a través de url en parámetro. Lo más usado
        // POST. En el cuerpo del mensaje. Passwords, etc (google drive) 

    //DO SOMETHING WITH THESE DATA

    newRequest.onreadystatechange = function() {

        if(this.readyState == 4 && this.status == 201) {
            

            ////EXITO, accedemos a nuestra request
    
            var ducks = JSON.parse(newRequest.responseText);

            // var list = document.createElement('div');
            var list = document.getElementById('main__duck-list');
         
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
                
                var id = duck.id;

                li.append(img);
                ul.append(li);
                ul.append(title);
                ul.append(price);


                li.addEventListener('click', function(e) {
                   ducksContainer.style.display = 'none';
                   e.preventDefault();

                    var detailReq = new XMLHttpRequest;
                    detailReq.open('GET', 'http://duckling-api.herokuapp.com/api/ducks/' + id);

                    detailReq.onreadystatechange = function() {

                        if(this.readyState == 4 && this.status == 201) {

                            var backButton = document.createElement('button');
                            backButton.addEventListener('click', function() {
                                ducksContainer.style.display = 'block';
                                detailDuck.style.display = 'none';
                            })

                            var duck = JSON.parse(detailReq.responseText);
                            
                            var title = document.createElement('h1');
                            var img = document.createElement('img');
                            var price = document.createElement('h4');
                            var description = document.createElement('p');

                            title.innerText = duck.title;
                            img.src = duck.imageUrl;
                            price.innerText = duck.price;
                            description.innerText = duck.description;

                            detailDuck.append(title, img, price, description, backButton);
                            // detailDuck.append(img);
                            // detailDuck.append(description)

                        };
                    }
                    detailReq.send();
                        
                })
                
            });
            
           
        }

    }
    newRequest.send();
    
}


buttonRequest.addEventListener('click', function(event) {
    
    event.preventDefault();
    peticion()
});
