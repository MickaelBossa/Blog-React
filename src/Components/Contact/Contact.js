// Styles
import classes from './Contact.module.css';

// Librairies
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import routes from '../../config/routes';

export default function Contact(props) {
    return (
        <>
            <h1>Contact</h1>
            <p>Par quel moyen de contact souhaitez-vous échanger ?</p>
            <Link className={classes.button} to={routes.EMAIL}>Email</Link>
            <Link className={classes.button} to={routes.PHONE}>Téléphone</Link>
            <Outlet />
        </>
    )
}
