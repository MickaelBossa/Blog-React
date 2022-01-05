// Style
import classes from './DisplayedArticle.module.css';

export default function DisplayedArticle(props) {
    return (
        <div className={[classes.displayedArticle, 'container'].join(' ')}>
            <h2>{props.article.title}</h2>
            <p>{props.article.preview}</p>
            <small>{props.article.author}</small>
        </div>
    )
}
