import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Avis from './avis/Avis';

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
      <section className="services" id="services">
        <h2 className="heading">Nos services</h2>
        <div className="box-container">
          <div className="box">
            <img src="img/serv1.jpg" alt="coupe de cheveux au rasoir" />
            <div className="content">
              <h3>Coupe</h3>
            </div>
          </div>

          <div className="box">
            <img src="img/serv2.jpg" alt="taille de barbe à la tondeuse" />
            <div className="content">
              <h3>Barbe</h3>
            </div>
          </div>

          <div className="box">
            <img src="img/serv3.jpg" alt="coloration couleur blanc" />
            <div className="content">
              <h3>Coloration</h3>
            </div>
          </div>

          <div className="box">
            <img src="img/serv4.jpg" alt="soin vapeur du visage" />
            <div className="content">
              <h3>Soin du visage</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="tarifs" id="tarifs">
        <div className="box-container">
          <div className="box">
            <h3 className="title">Coupe</h3>
            <div className="price">
              <span className="amount">15</span>
              <span className="currency">€</span>
            </div>
            <ul>
              <li> <i className="fas fa-check"></i> Shampoing </li>
              <li> <i className="fas fa-check"></i> Coupe à la tondeuse</li>
              <li> <i className="fas fa-check"></i> Coupe au ciseau</li>
              <li> <i className="fas fa-check"></i> Coupe au rasoir</li>
            </ul>
          </div>
          <div className="box">
            <h3 className="title">Barbe</h3>
            <div className="price">
              <span className="amount">20</span>
              <span className="currency">€</span>
            </div>
            <ul>
              <li> <i className="fas fa-check"></i> Coupe / Taille</li>
              <li> <i className="fas fa-check"></i> Rasoir / Ciseau</li>
              <li> <i className="fas fa-check"></i> Barbe - Moustache</li>
              <li> <i className="fas fa-check"></i> Soins</li>
            </ul>
          </div>
          <div className="box">
            <h3 className="title">Coloration</h3>
            <div className="price">
              <span className="amount">25</span>
              <span className="currency">€</span>
            </div>
            <ul>
              <li> <i className="fas fa-check"></i>Temporaire</li>
              <li> <i className="fas fa-check"></i>Permanente</li>
              <li> <i className="fas fa-check"></i>Couleur</li>
            </ul>
          </div>
          <div className="box">
            <h3 className="title">Défrisage</h3>
            <div className="price">
              <span className="amount">20</span>
              <span className="currency">€</span>
            </div>
            <ul>
              <li> <i className="fas fa-check"></i>Défrisage</li>
              <li> <i className="fas fa-check"></i>Lissage</li>
              <li> <i className="fas fa-check"></i>Soin Kératine</li>
            </ul>
          </div>
          <div className="box">
            <h3 className="title">Soin Vapeur</h3>
            <div className="price">
              <span className="amount">15</span>
              <span className="currency">€</span>
            </div>
            <ul>
              <li> <i className="fas fa-check"></i>Vapozone</li>
              <li> <i className="fas fa-check"></i>Serviette chaude</li>
              <li> <i className="fas fa-check"></i>Gommage</li>
              <li> <i className="fas fa-check"></i>Masque</li>
            </ul>
          </div>
          <div className="box">
            <h3 className="title">Épilation au fil</h3>
            <div className="price">
              <span className="amount">15</span>
              <span className="currency">€</span>
            </div>
            <ul>
              <li> <i className="fas fa-check"></i>Pommettes</li>
              <li> <i className="fas fa-check"></i>Mono-sourcil</li>
            </ul>
          </div>
        </div>
      </section>
      {window.location.pathname !== '/avis' && <Avis />}

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
            <img src="img/IMG_BB3.PNG" alt="" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
