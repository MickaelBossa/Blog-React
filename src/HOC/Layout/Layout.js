// Style
import classes from './Layout.module.css';

// Librairie
import React from 'react';

// Composants
import Header from '../../Components/Header/Header.js';
import Footer from '../../Components/Footer/Footer.js';

export default function Layout(props) {
    return (
        <div className={classes.layout}>
            <Header />

            <div className={classes.content}>
                {props.children}
            </div>

            <Footer />
        </div> 
    )
}
