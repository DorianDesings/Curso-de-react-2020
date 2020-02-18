import React from 'react';
import { generate as id } from 'shortid'

const Card = ({ author, date, img, tags, title, views, children }) => (
    <div className="card">
        <h2 className="card__title">{title}</h2>
        <img className="card__img" src={img} alt={title} />
        <p className="card__description">{children}</p>
        <p className="card__author">{author}</p>
        <ul className="card__tags">
            {
                tags.map(tag => (
                    <li key={id()} className="card__tag">{tag}</li>
                ))
            }
        </ul>
        <p className="card__views">{views}</p>
        <p className="card__date">{date}</p>

    </div>
);

export default Card;
