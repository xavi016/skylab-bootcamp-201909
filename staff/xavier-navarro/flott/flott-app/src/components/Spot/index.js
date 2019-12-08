import React from 'react'
// import './index.sass'

export default function ({ spot: { id, images, username, name, totalFavs, tags } }) {
    return  <>
                <div className="card__image">
                        <img src={images.length > 0 ? images[0] :"images/default-images/spot.png"} alt="spot" class="img"/>
                        <p class="more-info">More info</p>
                    </div>
                <ul className="card__tags tags">
                    {tags.map(tag => <li className="tags__item">{tag}</li>)}
                </ul>
                <div className="card__header">
                    <a className="#" class="url-maps"><i class="fas fa-map-marker-alt"></i></a>
                    <h1 className="spot-name">{name}</h1>
                    <p className="spot-location">(Barcelona)</p>
                </div>
                <div className="card__social social">
                    <div className="social__last-comment">
                        <img src={"images/default-images/user.png"} alt="user" class="user-image"/>
                        <p className="user-comment">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </p>
                        <p className="date">12/11/2019</p>
                    </div>
                    <p className="social__total-likes">
                        <i className="fas fa-heart"></i> {totalFavs}
                    </p>
                    <p className="social__total-comments">
                        <i className="far fa-comment-alt"></i> 84
                    </p>
                </div>
            </>
           
}