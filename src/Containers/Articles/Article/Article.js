// Styles
import classes from "./Article.module.css";

// Librairies
import { React, useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "../../../config/axios-firebase";
import routes from "../../../config/routes";
import fire from "../../../config/firebase";

export default function Article(props) {
  // State
  const [article, setArticle] = useState({});

  // ComponentDidMount
  useEffect(() => {
    axios
      .get('/articles.json?orderBy="slug"&equalTo="' + params.slug + '"')
      .then((response) => {

        if(Object.keys(response.data).length === 0) {
            navigate(routes.HOME);
        }

        for (let key in response.data) {
          setArticle({
            ...response.data[key],
            id: key,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Fonctions
  const deleteClickedHandler = () => {
      fire.auth().currentUser.getIdToken()
        .then(token => {
          axios
          .delete("/articles/" + article.id + ".json?auth=" + token)
          .then((response) => {
            navigate(routes.HOME);
          })
          .catch((error) => {
            console.log(error);
          });
        })
        .catch(error => {
          console.log(error);
        })
  };

  // Constantes
  const params = useParams();
  const date = new Date(article.date).toLocaleDateString("fr-FR");
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>{article.title}</h1>

      <div className={classes.content}>
        <div className={classes.lead}>
          <p>{article.preview}</p>
        </div>
        {article.content}
        {props.user ? 
          <div className={classes.button}>
            <Link to={routes.MANAGE_ARTICLE} state={{ article: article }}>
              <button>Modifier</button>
            </Link>
            <button onClick={deleteClickedHandler}>Supprimer</button>
          </div> 
        : null }
      </div>
      <div className={classes.author}>
        Publié par <b>{article.author}</b>
        <span>le {date}.</span>
        {article.draft === true ? <span className={classes.badge}>Brouillon</span> : null}
      </div>
    </div>
  );
}
