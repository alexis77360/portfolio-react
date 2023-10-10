import React, { useState } from 'react';
import logo from '../asset/img/logo.png';
import Typewriter from 'typewriter-effect';





const Navbar_mobile = () => {
    const [activeLink, setActiveLink] = useState(1 );

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

    //?Au clic sur le menu burger, afficher le menu mobile
    const handleMenuClick = () => {
        const nav = document.querySelector('.nav-m');
        nav.classList.toggle('active');
    };
    return(<>
        
        <div className="bar" onClick={handleMenuClick}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>

            <nav className="nav-m">
            <div className="logo-m">
                    <img src={logo} alt="profile" className="profile-img"/>

                    
                    <h2 className="job-m">Développeur <span className='job-text-m'><Typewriter 
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
       


       
      

            </>
);
   
};

export default Navbar_mobile;
        