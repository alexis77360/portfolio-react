import React, { useState } from 'react';

const Cv = () => {
  const [activeTab, setActiveTab] = useState('Diplomes'); 

  const handleTabChange = (event) => {
    setActiveTab(event.target.value);


  };

  const getContentForTab = () => {
    if (activeTab === 'Diplomes') {
        

      return (
        <div className='cv_text'>
        <p>
            Concepteur Développeur d'Applications
            <br />
            2018 - Current

        </p>

        <p>
            Développeur Web Openclassrooms
            <br />
            2016 - 2018
        </p>

        <p>
          European Bartender School
          <br />
          2014 - 2016
        </p>


        </div>
      );
    } else if (activeTab === 'Experiences') {
      return (
        <div className='cv_text'>
          <p>
            Développeur Web Fullstack
            <br />
            2018 - Current
            </p>

            <p>
            Webflow Développeuur
            <br />
            2016 - 2018
            </p>

            <p>
            Développeur Web Junior
            <br />
            2014 - 2016
            </p>


       
            
        </div>
      );
    } else if (activeTab === 'Langages') {
      return (
        <div className='cv_text'>
          <p>
            Développement d'application web
            <br />
            <span>HTML, CSS, JavaScript, Sass, React</span>
          </p>
          <p>
            Design UI / UX
            <br />
            <span>Figma, Affinity Designer, Canva</span>
          </p>
          <p>
            Création de site vitrine  
            <br />
            <span> Webflow </span>
          </p>

        </div>
      );
    }
  };

  return (
    <section id="cv">
      <h3>Mon Parcours</h3>
      <div className="cv_wrapper">
        <div className="tabs">
          <input
            type="radio"
            id="radio-1"
            name="tabs"
            value="Diplomes"
            checked={activeTab === 'Diplomes'}
            onChange={handleTabChange}
          />
          <label
            className={`tab ${activeTab === 'Diplomes' ? 'active-tab' : ''}`}
            htmlFor="radio-1"
          >
            Diplomes<span className="notification">2</span>
          </label>
          <input
            type="radio"
            id="radio-2"
            name="tabs"
            value="Experiences"
            checked={activeTab === 'Experiences'}
            onChange={handleTabChange}
          />
          <label
            className={`tab ${activeTab === 'Experiences' ? 'active-tab' : ''}`}
            htmlFor="radio-2"
          >
            Expériences
          </label>
          <input
            type="radio"
            id="radio-3"
            name="tabs"
            value="Langages"
            checked={activeTab === 'Langages'}
            onChange={handleTabChange}
          />
          <label
            className={`tab ${activeTab === 'Langages' ? 'active-tab' : ''}`}
            htmlFor="radio-3"
          >
            Langages
          </label>
          <span className="glider"></span>
        </div>
        {getContentForTab()}
      </div>
    </section>
  );
};

export default Cv;