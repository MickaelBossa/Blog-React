// Style
import classes from "./Navigation.module.css";

// Librairies
import React from 'react';
import routes from "../../../config/routes.js";
import fire from "../../../config/firebase";
import { useNavigate } from "react-router-dom";

// Composants
import NavigationItem from "./NavigationItem/NavigationItem.js";

export default function Navigation(props) {

  // Constantes
  const navigate = useNavigate();

  // Fonctions
  const logoutClickedHandler = () => {
    fire.auth().signOut();
    navigate(routes.HOME);
  }

  return (
    <ul className={classes.navigation}>
      <NavigationItem exact to={routes.HOME}>
        Accueil
      </NavigationItem>
      <NavigationItem to={routes.ARTICLES}>Articles</NavigationItem>
      <NavigationItem exact to={routes.CONTACT}>
        Contact
      </NavigationItem>
      { props.user ? <NavigationItem exact to={routes.MANAGE_ARTICLE}>
        Ajouter
      </NavigationItem> : null }
      { !props.user ? <NavigationItem exact to={routes.AUTHENTIFICATION}>
        Authentification
      </NavigationItem> : null }
      { props.user ? <button className={classes.logout} onClick={logoutClickedHandler} >Déconnexion</button> : null }
    </ul>
  );
}
