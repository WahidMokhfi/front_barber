import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import Header from '../../layout/Header';
import '../avis/avis.css';

function Avis() {
  const navigate = useNavigate();
  const [avis, setAvis] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3005/api/reviews')
      .then(response => response.json())
      .then(data => setAvis(data.data))
      .catch(error => console.error('Erreur lors de la récupération des avis :', error));
  }, []);

  const handlePosterAvis = () => {
    navigate('/connexion');
  };

  const handleRetourAccueil = () => {
    navigate('/accueil');
  };

  return (
    <>
    {/* <Header /> */}
    <section className="avis" id="avis">
      <h2 className="heading">Avis</h2>
      <div className="box-container">
        {avis.length > 0 ? (
          avis.map((avisItem, index) => (
            <div className="box" key={index}>
              <img src="img/icon-avis.png" alt="" className="quote" />
              <p>{avisItem.content}</p>
              <img src={avisItem.User.avatar} className="user" alt="" />
              <h3>{avisItem.User.username}</h3>
              <div className="stars">
                {Array.from({ length: avisItem.rating }, (_, i) => (
                  <i className="fas fa-star" key={i}></i>
                ))}
                {avisItem.rating % 1 !== 0 && (
                  <i className="fas fa-star-half-alt" key="half"></i>
                )}
              </div>
            </div>
          ))
        ) : (
          <div>Aucun avis disponible</div>
        )}
      </div>

      <div className="text-align:center">
        <input
          type="submit"
          value="Poster un avis"
          className="btn"
          onClick={handlePosterAvis}
        />
      </div>
      <div className="text-align:center">
        <button className="btn btn-return" onClick={handleRetourAccueil}>
          Retour à l'accueil
        </button>
      </div>
    </section>
    </>
  );
}

export default Avis;
















