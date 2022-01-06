// Style
import classes from './Header.module.css';

// Librairie
import React from 'react';

// Composants
import Navigation from './Navigation/Navigation.js';

export default function Header() {
    return (
        <>
            <header className={classes.header}>
                <div className={['container', classes.flex].join(' ')}>
                    <div>
                        LOGO
                    </div>
                    <nav>
                        <Navigation />
                    </nav>
                </div>
            </header>
        </>
    )
}
