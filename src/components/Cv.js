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
            Développeur Web Openclassrooms
            <br />
            <span>2022 - 2023 </span>
        </p>

        <p>
            Concepteur Développeur d'Applications
            <br />
            <span>
                  2021 - 2022
            </span>
              

        </p>

    

        <p>
          European Bartender School
          <br />
          <span>2013 - 2014</span>
        </p>


        </div>
      );
    } else if (activeTab === 'Experiences') {
      return (
        <div className='cv_text'>
          <p>
            Développeur Web Fullstack
            <br />
            <span>
              2018 - 2021
            </span>
            </p>

            <p>
            Webflow Développeuur
            <br />
            <span>
            2016 - 2018
            </span>
              
            </p>

            <p>
            Développeur Web Junior
            <br />
            <span>
            2015 - 2016
            </span>
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
            Diplomes<span className="notification"></span>
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