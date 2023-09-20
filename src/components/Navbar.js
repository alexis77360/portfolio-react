import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import logo from '../asset/img/logo.png';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState(1);

    const handleLinkClick = (index) => {
        setActiveLink(index);
    };

    const sections = [
        { id: 'home', index: 1 },
        { id: 'about-me', index: 2 },
        { id: 'realisation', index: 3 },
    /*     { id: 'mini-projets', index: 4 }, */
        { id: 'cv', index: 5 },
        { id: 'contact', index: 6 },
    ];
    //!Changer la couleur du lien actif en fonction de la section dans laquelle on se trouve
    const handleScroll = () => {
        const currentScroll = window.scrollY + window.innerHeight / 2;
        let activeSection = 1;

        for (const section of sections) {
            const target = document.getElementById(section.id);
            if (target) {
                const sectionTop = target.offsetTop;
                const sectionBottom = sectionTop + target.offsetHeight;

                if (currentScroll >= sectionTop && currentScroll <= sectionBottom) {
                    activeSection = section.index;
                }
            }
        }

        setActiveLink(activeSection);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <aside className="sidebar">
            <nav className="nav">
                <div className="logo">
                    <img src={logo} alt="profile" className="profile-img"/>

                    
                    <h2 className="job-title">Développeur <span className='job-text'><Typewriter 
                        options={{
                        strings: [
                        "Web",
                        "Full Stack",
                        "Front-End",    
                        "Back-End",                    
                        ],
                        delay: 150,
                        pauseFor: 1500,
                        autoStart: true,
                        loop: true,
                    }}
                    />
                    </span>
                    </h2>
                </div>

                <ul>
                    <li className={activeLink === 1 ? 'active' : ''}><a href="#home" onClick={() => handleLinkClick(1)}>Accueil</a></li>
                    <li className={activeLink === 2 ? 'active' : ''}><a href="#about-me" onClick={() => handleLinkClick(2)}>Mon histoire</a></li>
                    <li className={activeLink === 3 ? 'active' : ''}><a href="#realisation" onClick={() => handleLinkClick(3)}>Réalisation</a></li>
                   {/*  <li className={activeLink === 4 ? 'active' : ''}><a href="#mini-projets" onClick={() => handleLinkClick(4)}>Mini-projets</a></li> */}
                    <li className={activeLink === 5 ? 'active' : ''}><a href="#cv" onClick={() => handleLinkClick(5)}>CV</a></li>
                    <li className={activeLink === 6 ? 'active' : ''}><a href="#contact" onClick={() => handleLinkClick(6)}>Contact</a></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Navbar;
