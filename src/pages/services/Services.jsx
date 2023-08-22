import React, { useState, useEffect } from 'react';
import './services.css';
import Header from '../../layout/Header';
import { useLocation } from 'react-router-dom'; // Import de useLocation depuis react-router-dom

function Services() {
  const [services, setServices] = useState([]);
  const location = useLocation(); // Utilisation de useLocation pour obtenir l'emplacement actuel

  useEffect(() => {
    fetch('http://localhost:3005/api/services')
      .then(response => response.json())
      .then(data => setServices(data.data.map(service => ({ ...service, flipped: false }))))
      .catch(error => console.error('Erreur lors de la récupération des services :', error));
  }, []);

  const flipCard = (index) => {
    const updatedServices = services.map((service, i) => {
      if (i === index) {
        return { ...service, flipped: !service.flipped };
      }
      return { ...service, flipped: false };
    });
    setServices(updatedServices);
  };

  const isServicesPage = location.pathname === '/services'; // Vérifie si l'URL correspond à la page Services

  return (
    <>
      {isServicesPage && <Header />} {/* Affiche le Header uniquement si c'est la page Services */}
      <section className="services" id="services">
        <h2 className="heading">Nos services</h2>
        <div className="box-container">
          {services.length > 0 ? (
            services.map((service, index) => (
              <div className={`box ${service.flipped ? 'flipped' : ''}`} key={service.id} onMouseEnter={() => flipCard(index)}>
                <div className={`front-content ${service.flipped ? 'hidden' : ''}`}>
                  <img
                    src={`http://localhost:3000/img/serv${service.id}.jpg`}
                    alt={service.name}
                    className="adjusted"
                  />
                </div>
                <div className={`back-content ${service.flipped ? '' : 'hidden'}`}>
                  <h3>{service.name}</h3>
                  <div className="price">
                    <span className="amount">{service.price}</span>
                    <span className="currency">€</span>
                  </div>
                  <ul>
                    <li><i className="fas fa-check"></i>{service.description}</li>
                  </ul>
                </div>
              </div>
            ))
          ) : (
            <p>Aucun service disponible pour le moment.</p>
          )}
        </div>
      </section>
    </>
  );
}

export default Services;