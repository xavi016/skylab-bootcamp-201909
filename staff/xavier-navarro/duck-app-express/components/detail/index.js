const Feedback = require('../feedback')

module.exports = function ( { item: {  title, image, description, price, link }, path }) {
    return `<section class="details__container detail">
                <h2 class="details__title">${title}</h2>
                <img class="details__image" src=${image} />
                <p class="details__description">${description}</p>
                <a class="details__store" href=${link}>Go to store</a>
                <span class="details__price">${price}</span>
                <a class="details__back" href="${path}"}>Go back</a>
            </section>`
}