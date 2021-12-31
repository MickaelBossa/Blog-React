// Style
import classes from './Navigation.module.css';

// Composants
import NavigationItem from './NavigationItem/NavigationItem.js';

export default function Navigation() {
    return (
        <ul className={classes.navigation}>
            <NavigationItem to='/'>Accueil</NavigationItem>
            <NavigationItem to='/articles'>Articles</NavigationItem>
            <NavigationItem to='/contact'>Contact</NavigationItem>
        </ul>
    )
}
