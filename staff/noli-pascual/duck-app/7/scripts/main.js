var views = document.getElementsByClassName('view');

var registerView = new View(views[0]);
var loginView= new View(views[1]);
var searchView = new View(views[2]);
var detailView = new View(views[3]);

(function () {
    searchDucks('', function (error, ducks) {
        if (error) {
            feedback.render(error.message);

            results.hide();
            feedback.show();
        } else {
            ducks = ducks.shuffle().splice(0, 3);

            results.render(ducks);
        }
    });
})();

var register = new Register(document.getElementsByClassName('register')[0]);
var userArea = document.getElementsByClassName('userArea__text')[0];

register.onSubmit(function(name, surname, email, password) {

    try {
        registerUser(name, surname, email, password, function() {
            
            registerView.hide();
            loginView.show();
            
        });

    } catch (error) {
        feedback.render(error.message);
        feedback.show();
        
    }
}); 

var login = new Login(document.getElementsByClassName('login')[0]);

var goRegister = document.getElementsByClassName('login__goRegister')[0];

goRegister.addEventListener('click', function() {
    loginView.hide();
    registerView.show();
})

login.onSubmit(function(email, password){
    try {
      
        authenticateUser(email, password, function(result) { //callback(undefined, { id, token })
          
            retrieveUser(result.id, result.token, function(result) {
                
                userArea.innerHTML = 'Welcome '+ result.data.name + '!';
                loginView.hide();
                searchView.show();
            })
        });
        

    } catch (error) {
        alert(error);
        feedback.render(error.message);
        feedback.show();
        
    }
 })
    
var search = new Search(document.getElementsByClassName('search')[0]);
search.onSubmit(function (query) {
    searchDucks(query, function (error, ducks) {
        if (error) {
            feedback.render(error.message);

            results.hide();
            feedback.show();
        } else {
            results.render(ducks);

            feedback.hide();
            results.show();
        }
    });
});

var results = new Results(document.getElementsByClassName('results')[0]);
results.onItemRender = function () {
    var item = new ResultItem(document.createElement('li'));

    item.onClick = function (id) {
        retrieveDuck(id, function (error, duck) {
            if (error) {
                feedback.render(error.message);

                results.hide();
                feedback.show();
            } else {
                detail.render(duck);

                searchView.hide();
                detailView.show();
            }
        });
    };

    return item;
};

var detail = new Detail(document.getElementsByClassName('detail')[0]);

detail.onBack = function () {
    detailView.hide();
    searchView.show();
};

var feedback = new Feedback(document.getElementsByClassName('feedback')[0]);