function Detail (container){
    Component.call(this,container);
    this.container.innerHTML = "";
}

Detail.extend(Component);

Detail.prototype.render = function(duck){
    document.getElementsByClassName("results")[0].style.display = 'none';
    document.getElementsByClassName("search").style.display = 'none';
    document.getElementsByClassName("details")[0].style.display = 'block';

    var article = document.createElement('article');
    details.append(article)

    var img = document.createElement('img');
    img.src = duck.imageUrl;
    img.id = "img__detail";

    var title = document.createElement('h3');
    title.innerHTML = duck.title;
    title.className = "detail__title";

    var description = document.createElement('p');
    description.innerHTML = duck.description;

    var container = document.createElement('div');
    container.className = "container";

    var showOps = document.createElement('div');
    showOps.className = "show__options";

    var price = document.createElement('div');
    price.className = "price__detail";
    price.innerHTML = duck.price;

    var back = document.createElement('div')
    back.className = "back__button";
    back.innerHTML = "Go back";
    back.addEventListener('click', function () {
        document.getElementById("results").style.display = 'block';
        document.getElementById("searching").style.display = 'block';
        document.getElementById("details").style.display = 'none';
    })

    showOps.append(description, price, back);
    container.append(img, showOps);
    article.append(container, showOps);
    this.container.append(article)

}