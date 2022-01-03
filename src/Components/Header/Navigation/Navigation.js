// Style
import classes from './Navigation.module.css';

// Librairies
import routes from '../../../config/routes.js';

// Composants
import NavigationItem from './NavigationItem/NavigationItem.js';

export default function Navigation() {
    return (
        <ul className={classes.navigation}>
            <NavigationItem exact to={routes.HOME}>Accueil</NavigationItem>
            <NavigationItem to={routes.ARTICLES}>Articles</NavigationItem>
            <NavigationItem exact to={routes.CONTACT}>Contact</NavigationItem>
            <NavigationItem exact to={routes.ADDARTICLE}>Ajouter</NavigationItem>
        </ul>
    )
}
