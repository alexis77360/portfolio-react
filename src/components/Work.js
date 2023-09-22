import React from 'react';
import {projects} from "../asset/data/projet"
import Card from './Card';

const Work = () => {
    return (
        <section id="realisation">
          
                <h3>Mes Projets</h3>

                <div className="portofolio-grid">
                    {
                        projects.map((project) => (
                            <Card projects={project} key={project.title}/>
                        ))

                    }
                </div>

                 
              

        </section>
    );
};

export default Work;