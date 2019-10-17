(function () {
  searchDucks('', function (ducks) {
    ducks = ducks.shuffle().splice(0, 6);
    results.render(ducks);
  });
})();

var form = document.getElementsByClassName('form')[0];
var search = new Search(form);
search.onSubmit( function(query) {
  searchDucks(query, results.render); //ojo
});

var duckList = document.getElementsByClassName('duck__list')[0];
var results = new Results(duckList);

results.onItemRender = function() {
  var li = document.createElement('li');
  li.classList.add("duck");
  li.classList.add("duck--clicked");
  var item = new ResultItem(li);

  item.onClick = function(id) {
    retrieveDuck(id, function(duck) {
      var detail = new Detail(document.getElementsByClassName('duck--litle')[0]);

      detail.onBack = function() {
        toogleViews('view-list');
      };

      detail.render(duck);
      toogleViews('view-single');
    })
  }
  return item;
};
