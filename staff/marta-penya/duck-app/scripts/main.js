
//instancias de view para abrir y cerrar paneles
var views = document.getElementsByClassName('view');
var searchView = new View(views[0]);
var detailView = new View(views[1]);

//funcion para que salgan patos random al cargar la pagina
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


//panel de búsqueda, si se introduce algun input que no concuerda con ningun pato
//saltará error, sino la lista con todos los patos que cumplan
var button = new Search(document.getElementsByClassName('search__form')[0]);
button.onSubmit(function (query) {
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



var results = new Results(document.getElementsByClassName('item-list')[0]);


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


var detail = new Detail(document.getElementsByClassName('result')[0]);

detail.onBack = function () {
   
    detailView.hide();
    searchView.show();
};

var feedback = new Feedback(document.getElementsByClassName('feedback')[0]);

