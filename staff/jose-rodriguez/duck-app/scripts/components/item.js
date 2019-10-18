function Item (container){
    Component.call(this, container);
}

Item.extend(Component);

Item.prototype.onClick = undefined;

Item.prototype.render = function (duck) {
    
    var link = document.createElement('a');
    link.href = '#' + duck.id;

    var img = document.createElement('img');
    img.src = duck.imageUrl;

    var title = document.createElement('h3');
    title.innerHTML = duck.title;

    var price = document.createElement('p');
    price.innerHTML = duck.price;


    link.addEventListener('click', function (e) {
        e.preventDefault();
        var id = duck.id;
        this.onClick(id);
    }.bind(this));
    
    this.container.className = "article__content";
    link.append(img,title,price);
    this.container.append(link)



    // article.append(link, title, price)
    // div.append(article)

}