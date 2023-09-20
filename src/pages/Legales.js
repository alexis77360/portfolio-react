import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Legales = () => {
    return (
        <section className='legale'>
        <h1>Mentions légales</h1>
        <h2>Protection des droits</h2>
        
        <p>Les éléments constituant le présent Site, développés par AlexFav Dev, sont protégés par la législation applicable en matière de droit d’auteur, de droit des marques, de droit des dessins et modèles et de concurrence déloyale.</p>

        <p>Le contenu comprend, notamment, l’architecture, la charte graphique ainsi que l’ensemble des informations et éléments disponibles sur le site Internet, tels que les textes, articles, photographies, illustrations, images, marques et logos, éléments graphiques, développements spécifiques et contenus téléchargeables.</p>

        <p>Le contenu est la propriété de la société AlexFav Dev. Toute reproduction, représentation, diffusion et/ou exploitation de tout ou partie du contenu est interdite, sauf autorisation expresse préalable et écrite de la société AlexFav Dev.</p>

        <p>Toute personne ne respectant pas les dispositions légales applicables se rend coupable du délit de contrefaçon et est passible des sanctions pénales prévues par la loi, nonobstant tout autre recours de la société AlexFav Dev.</p>

        <h2>Données personnelles et RGPD</h2>
        <p>
        Selon le règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016, règlement relatif à la protection des personnes physiques à l’égard du traitement des données à caractère personnel et à la libre circulation de ces données (« RGPD »), applicable le 25 mai 2018, les informations recueillies sur ce site sont enregistrées dans un fichier informatisé pour communiquer des informations sur le domaine d’activité de AlexFav Dev. Ces données sont destinées à l’entreprise AlexFav Dev. Elles ne sauraient en aucun cas être cédées, que ce soit à titre gratuit ou onéreux à des tiers.</p>

        <h2>Politique de Cookies</h2>

        <p>AlexFav Dev attire votre attention sur le fait que certaines informations ne correspondant pas à des données personnelles et ne permettant pas de vous identifier peuvent être enregistrées par nos serveurs (navigateur utilisé, adresse IP,…). De plus, la connexion à notre serveur web peut entraîner l’envoi à votre navigateur de cookies qui seront stockés sur le disque dur de votre ordinateur. Les cookies enregistrent des informations relatives à la navigation de votre ordinateur sur notre site (les pages que vous avez consultées, la date et l’heure de la consultation, etc.) que nous pourrons lire lors de vos visites ultérieures.</p>

        <p>Votre navigateur contient une fonction permettant de refuser les cookies (modalités précisées sur le site Internet de la CNIL).
        Ceci n’empêchera pas la connexion à notre site, mais pourra retarder les délais de chargement des pages.
        Retourner à l'accueil</p>

        <div className='btn'><Link to='/'>Retourner à l'accueil</Link></div>

            

        <Footer />
      </section>
    );
};

export default Legales;