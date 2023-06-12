import React from 'react';
import '../contact/contact.css';
import Header from '../../layout/Header';

function Contact() {
  return (
    <>
      <Header />
      <section className="contact" id="contact">
        <h2 className="heading">Contact</h2>
        <div className="row">
          <form action="">
            <h3>Nous envoyer un message</h3>
            <div className="inputBox">
              <input type="text" placeholder="Votre nom" />
            </div>
            <div className="inputBox">
              <input type="email" placeholder="Votre e-mail" />
            </div>
            <div className="inputBox">
              <input type="text" placeholder="Sujet" />
            </div>
            <div className="inputBox">
              <textarea placeholder="Votre message"></textarea>
            </div>
            <input type="submit" value="Envoyer" className="btn" />
          </form>
          <div className="image">
            <img src="img/IMG_BB3.PNG" alt="" className="responsive-image" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;




