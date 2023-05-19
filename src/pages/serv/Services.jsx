import React from 'react';
import '../serv/services.css';
import Header from '../../layout/Header';

function Services() {
  return (
    <>
      <Header />
      <section className="services" id="services">
        <h1 className="heading">Nos services</h1>

        <div className="box-container">
          <div className="box">
            <img src="img/serv1.jpg" alt="" />
            <div className="content">
              <h3>Coupe</h3>
            </div>
          </div>

          <div className="box">
            <img src="img/serv2.jpg" alt="" />
            <div className="content">
              <h3>Barbe</h3>
            </div>
          </div>

          <div className="box">
            <img src="img/serv3.jpg" alt="" />
            <div className="content">
              <h3>Coloration</h3>
            </div>
          </div>

          <div className="box">
            <img src="img/serv4.jpg" alt="" />
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
    </>
  );
}

export default Services;

