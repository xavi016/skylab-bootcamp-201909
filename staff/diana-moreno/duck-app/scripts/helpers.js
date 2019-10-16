function call(method, url, callback) {
  fetch(method, url, function(response) {
    if (response.readyState == 4 && response.status == 201) {
      var results = JSON.parse(response.responseText);

      callback(results);
    }
  });
};

var viewList = document.getElementsByClassName('view__list')[0];
var viewSingle = document.getElementsByClassName('view__single')[0];

// función que activa o desactiva pantallas
function toogleViews(view) {
  if (view === 'view-list') {
    viewList.classList.remove('view--hide');
    viewSingle.classList.add('view--hide');
  } else if (view === 'view-single') {
    viewList.classList.add('view--hide');
    viewSingle.classList.remove('view--hide');
  }
};
