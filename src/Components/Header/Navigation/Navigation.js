// Style
import classes from "./Navigation.module.css";

// Librairies
import React from 'react';
import routes from "../../../config/routes.js";

// Composants
import NavigationItem from "./NavigationItem/NavigationItem.js";

export default function Navigation() {
  return (
    <ul className={classes.navigation}>
      <NavigationItem exact to={routes.HOME}>
        Accueil
      </NavigationItem>
      <NavigationItem to={routes.ARTICLES}>Articles</NavigationItem>
      <NavigationItem exact to={routes.CONTACT}>
        Contact
      </NavigationItem>
      <NavigationItem exact to={routes.MANAGE_ARTICLE}>
        Ajouter
      </NavigationItem>
      <NavigationItem exact to={routes.AUTHENTIFICATION}>
        Authentification
      </NavigationItem>
    </ul>
  );
}
