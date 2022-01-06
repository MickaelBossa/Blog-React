// Style
import classes from './DisplayedArticle.module.css';

// Librairies
import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../../config/routes';

export default function DisplayedArticle(props) {
    return (
        <Link className={classes.link} to={routes.ARTICLES + '/' + props.article.slug}>
            <div className={[classes.displayedArticle, 'container'].join(' ')}>
                <h2>{props.article.title}</h2>
                <p>{props.article.preview}</p>
                <small>{props.article.author}</small>
            </div>
        </Link>
    )
}
