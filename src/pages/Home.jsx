import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

function Home() {
  return (
    <>
      <Header />
      <section className="accueil" id="accueil">
      <div className="content">
          <span>Bienvenue</span>
          <h3>Lorem, ipsum. Lorem, ipsum dolor.</h3>
      </div>
    </section>
    <section className="apropos" id="apropos">
      <h1 className="heading">À propos</h1>
      <div className="row">
        <div className="image">
          <img src="img/banner2.jpg" alt="" />
        </div>
        <div className="content">
          <h3 className="title">Lorem ipsum dolor sit amet.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris dolor, gravida a varius blandit, auctor
            eget purus. Phasellus scelerisque sapien sit amet mauris laoreet, eget scelerisque nunc cursus. Duis
            ultricies malesuada leo vel aliquet. Curabitur rutrum porta dui eget mollis. Nullam lacinia dictum auctor.
          </p>
          <p>
            aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius
            natoque penatibus et magnis dis parturient montes.
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
      <section className="avis" id="avis">
        <h1 class="heading">Avis</h1>
        <div className="box-container">
            <div className="box">
                <img src="img/icon-avis.png" alt="" className="quote"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
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
        <input type="submit" value="Poster un avis" className="btn" />
        </div>
    </section>
    <section className="contact" id="contact">
    <h1 className="heading"> Nous Contacter</h1>
    <div className="row">
        <form action="">
            <h3>Lorem ipsum dolor sit amet.</h3>
            <div className="inputBox">
                <input type="text" placeholder="Votre nom" />
            </div>
            <div className="inputBox">
                <input type="email" placeholder="Votre-mail" />
            </div>
            <div className="inputBox">
                <input type="text" placeholder="Sujet" />
            </div>
            <div className="inputBox">
                <input type="text" placeholder="Votre Message" />
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
