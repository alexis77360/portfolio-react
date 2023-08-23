import React, { useState } from 'react';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState(0);

    const handleLinkClick = (index) => {
        setActiveLink(index);
    };

    return (
        <aside className="sidebar">
            <nav className="nav">
                <div className="logo">
                    <img src="https://avatars.githubusercontent.com/u/78885792?v=4" alt="profile" className="profile-img"/>
                    <h1 className="name">Alexis Favennec</h1>
                    <h2 className="job-title">Développeur Front-End</h2>
                </div>

                <ul>
                    <li className={activeLink === 1 ? 'active' : ''}><a href="#accueil" onClick={() => handleLinkClick(1)}>Accueil</a></li>
                    <li className={activeLink === 2 ? 'active' : ''}><a href="#histoire" onClick={() => handleLinkClick(2)}>Mon histoire</a></li>
                    <li className={activeLink === 3 ? 'active' : ''}><a href="#realisation" onClick={() => handleLinkClick(3)}>Réalisation</a></li>
                    <li className={activeLink === 4 ? 'active' : ''}><a href="#mini-projets" onClick={() => handleLinkClick(4)}>Mini-projets</a></li>
                    <li className={activeLink === 5 ? 'active' : ''}><a href="#cv" onClick={() => handleLinkClick(5)}>CV</a></li>
                    <li className={activeLink === 6 ? 'active' : ''}><a href="#contact" onClick={() => handleLinkClick(6)}>Contact</a></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Navbar;
