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
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui deleniti atque perferendis, quam recusandae laboriosam odit aperiam mollitia exercitationem libero at autem sit. Non voluptates quod tempore vero deserunt? Autem?
        Voluptatibus quas minima odio error quisquam soluta corporis deserunt, aliquid aspernatur corrupti laboriosam esse officia fuga cupiditate quos non perspiciatis culpa enim vitae. Nihil, ut. Perspiciatis fugit accusantium amet cumque.
        Corporis quasi recusandae possimus quo tenetur quidem assumenda ipsam. Corporis nobis, omnis magnam impedit praesentium voluptate atque repudiandae non sapiente eligendi aperiam est sit architecto! Amet quam aspernatur minus dolorum!
        Eius consequatur ex ratione expedita, sint rerum mollitia voluptatum a blanditiis corporis quos. Velit earum maxime officiis rem explicabo accusantium beatae veniam aut quo? Dolore autem animi magnam neque necessitatibus.
        Sapiente assumenda sunt soluta, voluptatem impedit tempore molestias vero aut tempora quasi incidunt natus velit itaque aliquid eaque! A nesciunt facilis dolorum! Porro quibusdam provident odio soluta facilis velit tempora.</p>

        </div>
      );
    } else if (activeTab === 'Experiences') {
      return (
        <div className='cv_text'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet ducimus asperiores nemo id? Ipsum nihil voluptates ratione assumenda, amet quaerat odio, repellendus nulla minus aliquid ea at, modi sequi nemo.
          Sunt quaerat quisquam inventore sint quia laborum laudantium, placeat nemo aliquam ab. Cumque repellendus nesciunt sint accusamus iure fuga quos nemo consequatur, nisi incidunt dolorum aspernatur temporibus, doloribus atque dolore.</p>
        </div>
      );
    } else if (activeTab === 'Langages') {
      return (
        <div className='cv_text'>
          <p>SALUFQSD SFS FSD qd QSD Qd sd sdQDq</p>
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
            onClick={handleTabChange}
          />
          <label
            className={`tab ${activeTab === 'Diplomes' ? 'active' : ''}`}
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
            onClick={handleTabChange}
          />
          <label
            className={`tab ${activeTab === 'Experiences' ? 'active' : ''}`}
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
            onClick={handleTabChange}
          />
          <label
            className={`tab ${activeTab === 'Langages' ? 'active' : ''}`}
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