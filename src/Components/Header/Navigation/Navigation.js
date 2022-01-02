// Style
import classes from './Navigation.module.css';

// Composants
import NavigationItem from './NavigationItem/NavigationItem.js';

export default function Navigation() {
    return (
        <ul className={classes.navigation}>
            <NavigationItem exact to='/'>Accueil</NavigationItem>
            <NavigationItem to='/articles'>Articles</NavigationItem>
            <NavigationItem exact to='/contact'>Contact</NavigationItem>
        </ul>
    )
}
