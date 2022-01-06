// Style
import './NavigationItem.css';

// Librairies
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavigationItem(props) {
    return (
        <li className="navigationItem">
            <NavLink to={props.to} className={({ isActive }) => "navigationItem" + (isActive ? " activated" : "")}>{props.children}</NavLink>
        </li>
    )
}
