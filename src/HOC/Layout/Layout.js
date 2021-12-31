// Style
import classes from './Layout.module.css';

// Composants
import Header from '../../Components/Header/Header.js';

export default function Layout(props) {
    return (
        <>
            <Header />
            {props.children}
        </> 
    )
}
