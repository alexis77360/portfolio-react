import React from 'react';
import {projects} from "../asset/data/projet"
import Card from './Card';

const Work = () => {
    return (
        <section id="realisation">
            <div className="realisation-content">
                <h3>Projets</h3>
                <Card projects={projects} key={projects.title}/>
            </div>
        </section>
    );
};

export default Work;