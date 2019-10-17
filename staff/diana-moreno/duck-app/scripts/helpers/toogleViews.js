var viewList = new View(document.getElementsByClassName('view__list')[0]);
var viewSingle = new View(document.getElementsByClassName('view__single')[0]);


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
