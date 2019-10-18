var viewList = new View(document.getElementsByClassName('view__list')[0]);
var viewSingle = new View(document.getElementsByClassName('view__single')[0]);
var feedback = new Feedback(document.getElementsByClassName('view__feedback')[0]);

(function() {
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
})();

var form = document.getElementsByClassName('form')[0];
var search = new Search(form);
search.onSubmit(function(query) {
  searchDucks(query, function(error, ducks) {
    if (error) {
      console.log('error')
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