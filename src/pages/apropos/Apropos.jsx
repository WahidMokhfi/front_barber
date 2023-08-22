import React from 'react';
import './apropos.css';
import Header from '../../layout/Header';


function Apropos() {
  return (
    <>
    <Header />
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
  </>
  );
}

export default Apropos;


