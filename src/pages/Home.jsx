import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Avis from './avis/Avis';
import Services from './services/Services'; // Import du composant Services

function Home() {
  
  return (
    <>
      <Header />
      <section className="accueil" id="accueil">
      <div className="content">
          <span>Bienvenue à</span>
          <h1>Barber Bègles</h1>
      </div>
    </section>
    <section className="apropos" id="apropos">
      <h2 className="heading">À propos</h2>
      <div className="row">
        <div className="image">
          <img src="img/banner2.jpg" alt="" />
        </div>
        <div className="content">
          <h3 className="title">Votre salon de référence depuis 2019</h3>
          <p>
              Découvrez l'expertise de votre salon Barber Bègles. Nous vous proposons des coupes de cheveux soignées, des
              styles de barbe impeccables et des soins du visage de qualité supérieure. Nos barbers sont là pour
              vous offrir des services accessibles à tous, sans compromis sur la qualité.
          </p>
          <p>
              Profitez d'un cadre moderne et accueillant, où vous pourrez vous détendre et bénéficier de soins personnalisés.
              Nous mettons à votre disposition notre savoir-faire et nos produits de haute qualité pour vous garantir une
              expérience de barber premium.
          </p>
          <div className="icons-container">
            <div className="icons">
              <img src="img/icon1.png" alt="" />
              <h3>Beau-gosse</h3>
            </div>
            <div className="icons">
              <img src="img/icon2.png" alt="" />
              <h3>Belle-barbe</h3>
            </div>
            <div className="icons">
              <img src="img/icon3.png" alt="" />
              <h3>Belle mèche</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Services /> {/* Affichage du composant Services */}
      {window.location.pathname !== '/avis' && <Avis />}
      <section className="contact" id="contact">
        <h2 className="heading">Contact</h2>
        <div className="contact-container">
          <div className="map-section">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d90598.08628014172!2d-0.6400038301390164!3d44.79731237436121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0xd5526e6989399bd%3A0xdb3569ab8938da85!2s9%20Pl.%20de%20Strasbourg%2C%2033130%20B%C3%A8gles!3m2!1d44.797336699999995!2d-0.5576035!5e0!3m2!1sfr!2sfr!4v1692617937862!5m2!1sfr!2sfr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="image-section">
            <img src="img/IMG_BB3.PNG" alt="" className="responsive-image" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
