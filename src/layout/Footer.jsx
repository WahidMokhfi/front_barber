import React from 'react';
import './footer.css';

function Footer() {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>+ de photos sur notre Instagram</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, voluptatem.</p>
          <div className="share">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="link">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="box">
          <h3>Contact</h3>
          <p>07 07 07 07 07</p>
          <a href="mailto:barber@example.com" className="link">barber@...</a>
        </div>
        <div className="box">
          <h3>Localisation</h3>
          <p>9 Place de Strasbourg<br/>33130 Bègles</p>
        </div>
        <div className="box">
          <div className="credit">
            <a href="https://www.example.com/mentions-legales" className="link">Mentions Légales</a>
            <span className="credit-item">Créé par WahidM | Tous droits réservés</span>
            <a href="https://www.example.com/cgv-cgu" className="link">CGV/CGU</a>
            <a href="https://www.example.com/donnees-personnelles" className="link">Données personnelles</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;








