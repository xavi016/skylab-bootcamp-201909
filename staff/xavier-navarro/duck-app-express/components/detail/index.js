const Feedback = require('../feedback')

module.exports = function ( { item: { id, title, image, description, price, link, isFav }, backPath, favPath }) {
    return `<section class="details__container detail">
                <h2 class="details__title">${title}</h2>
                <img class="details__image" src=${image} />
                <p class="details__description">${description}</p>
                <a class="details__store" href=${link}>Go to store</a>
                <span class="details__price">${price}</span>
                <span class="duck__fav">
                        <form method="post" action="${favPath}">
                            <input type="hidden" name="id" value="${id}>
                            <button type="submit">${isFav ? '🧡' : '💔'}</button>
                        </form>
                    </span>
                <a class="details__back" href="${backPath}"}>Go back</a>
            </section>`
}