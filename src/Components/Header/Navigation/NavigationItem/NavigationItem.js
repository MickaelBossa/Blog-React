// Style
import classes from './NavigationItem.module.css';

// Librairies
import { Link } from 'react-router-dom';

export default function NavigationItem(props) {
    return (
        <li className={classes.navigationItem}>
            <Link to={props.to}>{props.children}</Link>
        </li>
    )
}
