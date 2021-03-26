import React from 'react';
import '../Sass/navbar.scss';

export function NavBar() {
    return <>
        <header>
            <ul>
                <li><a className="activeMenu" href="#banner">Accueil</a></li>
                <li><a href="#portfolio">Projets</a></li>
                <li><a href="#about">A propos</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </header>
    </>
}