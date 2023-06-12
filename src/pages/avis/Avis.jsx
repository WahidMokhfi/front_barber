import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../avis/avis.css';
import Header from '../../layout/Header';

function Avis() {
  const navigate = useNavigate();

  const handlePosterAvis = () => {
    navigate('/connexion');
  };

  return (
    <>
      <Header />
      <section className="avis" id="avis">
        <h2 className="heading">Avis</h2>
        <div className="box-container">
          <div className="box">
            <img src="img/icon-avis.png" alt="" className="quote" />
            <p>
                Une équipe compétente et attentionnée. Les coupes de cheveux sont toujours
                impeccables et les conseils personnalisés sont très appréciés. Je recommande vivement Barber Bègles pour un
                service de qualité supérieure.
            </p>
            <img src="img/testimonial-1.jpg" className="user" alt="" />
            <h3>John Doe</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </div>
          <div className="box">
            <img src="img/icon-avis.png" alt="" className="quote" />
            <p>
              J'ai été agréablement surpris par l'excellent service et l'ambiance conviviale chez Barber Bègles. Le barbier a su
              comprendre exactement ce que je voulais et le résultat a dépassé mes attentes. Je recommande vivement cet endroit
              pour une expérience de barber de qualité.
            </p>
            <img src="img/testimonial-2.jpg" className="user" alt="" />
            <h3>John Doe</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </div>
          <div className="box">
            <img src="img/icon-avis.png" alt="" className="quote" />
            <p>
              Un super salon ! Toujours impressionné par l'attention aux détails et le professionnalisme de
              l'équipe. Les produits utilisés sont de grande qualité et les résultats sont toujours impeccables. Je suis un
              client fidèle et je recommande vivement Barber Bègles.
            </p>
            <img src="img/review-1.png" className="user" alt="" />
            <h3>John Doe</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </div>
        </div>

        <div className="text-align:center">
          <input type="submit" value="Poster un avis" className="btn" onClick={handlePosterAvis} />
        </div>
      </section>
    </>
  );
}

export default Avis;


