import React from 'react';
import bf from'../asset/img/bf-peinture.png';

const Card = ({ projects }) => {
    return (
        <div className="portofolio-grid">
            <div class="portfolio-card">
            <div class="overlay"></div>
                <img src={bf} alt="project" />
                <h4>Titre du Projet</h4>
                <p>Description courte du projet.</p>
            </div>
            <div class="portfolio-card">
            <div class="overlay"></div>
                <img src={bf} alt="project" />
                <h4>Titre du Projet</h4>
                <p>Description courte du projet.</p>
            </div>
            <div class="portfolio-card">
            <div class="overlay"></div>
                <img src={bf} alt="project" />
                <h4>Titre du Projet</h4>
                <p>Description courte du projet.</p>
            </div>
            <div class="portfolio-card">
            <div class="overlay"></div>
                <img src={bf} alt="project" />
                <h4>Titre du Projet</h4>
                <p>Description courte du projet.</p>
            </div>
        </div>

          
    );
};

export default Card;
