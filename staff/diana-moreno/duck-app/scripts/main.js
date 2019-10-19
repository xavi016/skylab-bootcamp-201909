var viewList = new View(document.getElementsByClassName('view__list')[0]);
var viewSingle = new View(document.getElementsByClassName('view__single')[0]);
var viewRegister = new View(document.getElementsByClassName('view__register')[0]);
var viewLogin = new View(document.getElementsByClassName('view__login')[0]);
var viewHeader = new View(document.getElementsByClassName('view__header')[0]);
var feedback = new Feedback(document.getElementsByClassName('view__feedback')[0]);
var buttonRegister = document.getElementsByClassName('form__button--register')[1];
var buttonBackToLogin = document.getElementsByClassName('form__button--register-back')[0];
let errorMessageLogin = document.getElementsByClassName("form__confirmation")[1]
let errorMessageRegister = document.getElementsByClassName("form__confirmation")[0]


buttonRegister.addEventListener('click', switchToRegister);
function switchToRegister() {
  viewLogin.hide();
  viewRegister.show();
  errorMessageLogin.innerHTML = ''
}

buttonBackToLogin.addEventListener('click', switchToLogin);
function switchToLogin() {
  viewLogin.show();
  viewRegister.hide();
}


function initialRandomDucks() {
  searchDucks('', function(error, ducks) {
    if (error) {
      feedback.render(error.message);
      viewList.hide();
      feedback.show();
    } else {
      ducks = ducks.shuffle().splice(0, 8);
      results.render(ducks);
    }
  });
}

var register = new Register(document.getElementsByClassName('form')[1]);
register.onSubmit(function(name, surname, email, password) {
  registerUser(name, surname, email, password, function(error) {
    if(error) {
      errorMessageRegister.innerHTML = error.message;
      feedback.render(error.message);
      viewList.hide();
      feedback.show();
    } else {
      viewRegister.hide()
      viewLogin.show()
    }
  })
})

var login = new Login(document.getElementsByClassName('form')[2]);
login.onSubmit(function(email, password) {
  authenticateUser(email, password, function(error) {
    if(error) {
      viewList.hide();
      feedback.hide();
      errorMessageLogin.innerHTML = 'Ups! Your username and/or password is not correct'
    } else {
      viewLogin.hide()
      viewHeader.show()
      viewList.show()
      initialRandomDucks()
    }
  })
})

var form = document.getElementsByClassName('form')[0];
var search = new Search(form);
search.onSubmit(function(query) {
  searchDucks(query, function(error, ducks) {
    if (error) {
      feedback.render(error.message);
      viewList.hide();
      feedback.show();
    } else {
      results.render(ducks);
      feedback.hide();
      results.show();
    }
  }); // NOTE it works thanks to the internal binding that takes place in Results constructor
});

var duckList = document.getElementsByClassName('duck__list')[0];
var results = new Results(duckList);
results.onItemRender = function() {
  var li = document.createElement('li');
  li.classList.add("duck");
  li.classList.add("duck--clicked");
  var item = new ResultItem(li);

  item.onClick = function(id) {
    retrieveDuck(id, function(error, duck) {
      if (error) {
        feedback.render(error.message);
        results.hide();
        feedback.show();
      } else {
        detail.render(duck);
        viewList.hide();
        viewSingle.show();
      }
    })
  }
  return item;
};

var detail = new Detail(document.getElementsByClassName('duck--litle')[0]);
detail.onBack = function() {
  viewList.show();
  viewSingle.hide();
};