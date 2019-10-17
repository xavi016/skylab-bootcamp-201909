var form = document.getElementsByClassName('form')[0];
var duckList = document.getElementsByClassName('duck__list')[0];

listInitialRandomDucks();

function listInitialRandomDucks() {
  searchDucks('', function (ducks) {
    ducks = ducks.shuffle().splice(0, 6);
    paintResults(ducks);
  })
};

var search = new Search(form);
search.onSubmit(listSearchResults);

function listSearchResults(query) {
  searchDucks(query, paintResults);
};

var results = new Results(duckList);

function paintResults(ducks) {
  results.render(ducks);
};

results.onItemClick = function(duck) {
  var detail = new Detail(document.getElementsByClassName('duck--litle')[0]);
  detail.render(duck);
  toogleViews('view-single');
}
