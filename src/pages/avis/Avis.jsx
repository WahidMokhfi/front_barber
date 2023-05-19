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
        <h1 className="heading">Avis</h1>
        <div className="box-container">
          <div className="box">
            <img src="img/icon-avis.png" alt="" className="quote" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis?
              Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis?
              Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis?
              Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.
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
