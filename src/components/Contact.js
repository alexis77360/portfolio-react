import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
const form = useRef();

const sendEmail = (e) => {
    e.preventDefault();

    const formMessage = document.querySelector('.form-message');

    //? YOUR_SERVICE_ID = Service ID from EmailJS dashboard
    emailjs.sendForm(
         process.env.REACT_APP_EMAILJS_SERVICE_ID,
         process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
         form.current,
         //!on peut utiliser les variables d'environnement dans le fichier .env pour cacher les informations sensibles
         process.env.REACT_APP_EMAILJS_USER_ID
         )
         
      .then((result) => {
          //? remettre les champs à vide
            form.current.reset();
            //? afficher le message de succès
            formMessage.innerHTML = "<p class='sucess'> Message envoyé avec succès !<p> ";

            //? supprimer le message de succès après 5 secondes
            setTimeout(() => formMessage.remove(), 5000);




      }, (error) => {

            //? afficher le message d'erreur
            formMessage.innerHTML = "<p class='error'> Une erreur s'est produite, veuillez réessayer. <p>";
            //? supprimer le message d'erreur après 5 secondes
            setTimeout(() => formMessage.remove(), 5000);

      });
  };

  return (
    <div className="form-container">
    <form ref={form} onSubmit={sendEmail}>
      <label>Nom</label>
      <input type="text" name="name" required autoComplete='off' />
      <label>Email</label>
      <input type="email" name="email" required autoComplete='off'/>
      <label>Message</label>
      <textarea name="message" required autoComplete='off'/>
      <input type="submit" value="Envoyer" />
    </form>
    <div className="form-message">

    </div>
    </div>
  );
};

export default Contact;