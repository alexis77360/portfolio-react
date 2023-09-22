import React from 'react';
import video from '../asset/img/particules.mp4';
import { Link } from 'react-router-dom';

const Notfound = () => {




    return (
        <div className='not-found-page'>

<div className="video-background">
      <video  autoPlay muted loop >
        {/* Remplacez "video-background.mp4" par le chemin de votre vidéo */}
        <source src={video} type="video/mp4"  />
        Your browser does not support the video tag.
      </video>
    </div>

        <div className="not-found">
        <h2>Erreur 404</h2>
        <p>Whoops ! ... La page que vous essayez d’afficher n’existe pas.
        <div className='btn'><Link to='/'>Retourner à l'accueil</Link></div>
</p>
</div>
      </div>
    );
};

export default Notfound;