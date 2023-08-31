import React from 'react';

const Card = ({ projects }) => {
    return (
       
            <div className="portfolio-card">
            <div className="overlay"></div>
                <img loading='lazy' src={projects.img} alt={projects.title} />
                <h4>{projects.title}</h4>
                <p>{projects.desc}</p>
                
               
            </div>

                    

           
        

    );
};

export default Card;
