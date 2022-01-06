// Styles
import classes from './DisplayedArticles.module.css';

// Librairie
import React from 'react';

// Composants
import DisplayedArticle from './DisplayedArticle/DisplayedArticle';

export default function DisplayedArticles(props) {

    const articles = props.articles.map(article => (
        <DisplayedArticle key={article.id} article={article} />
    ));

    return (
        <section className={classes.displayedArticles}>
            {articles}
        </section>
    )
}
