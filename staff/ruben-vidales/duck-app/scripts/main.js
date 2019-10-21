var views = document.getElementsByClassName('view');
var searchView = new View(views[0]);
var detailView = new View(views[1]);

var search = new Search(document.getElementsByClassName('header__form')[0]);

var ducksPanel = new Results(document.getElementsByClassName('ducks-panel__list')[0]); 

var detailPanel = new Detail(document.getElementsByClassName('detail-panel')[0]);

var feedback = new Feedback(document.getElementsByClassName('feedback')[0]);

(function () {
    searchDucks('', function (error, ducks) {
        if (error) {
            feedback.render(error.message);

            ducksPanel.hide();
            feedback.show();
        } else {
            ducks = ducks.shuffle().splice(0, 4);

            ducksPanel.render(ducks);
        }
    });
})();

search.onSubmit(function (query) {
    searchDucks(query, function (error, ducks) {
        if (error) {
            feedback.render(error.message);

            ducksPanel.hide();
            detailView.hide();
            feedback.show();
        } else {
            ducksPanel.render(ducks);

            feedback.hide();
            ducksPanel.show();
            detailView.hide();
            searchView.show();
        }
    });
});

ducksPanel.onItemRender = function () {
    var item = new ResultItem(document.createElement('li'));

    item.onClick = function (id) {
        retrieveDuck(id, function (error, duck) {
            if (error) {
                feedback.render(error.message);

                ducksPanel.hide();
                feedback.show();
            } else {
                detailPanel.render(duck);

                searchView.hide();
                detailView.show();
            }
        });
    };

    return item;
};

detailPanel.onBack = function () {
    detailView.hide();
    searchView.show();
};
