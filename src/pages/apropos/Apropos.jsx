import React from 'react';
import './apropos.css';
import Header from '../../layout/Header';


function Apropos() {
  return (
    <>
    <Header />
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
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius
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
  </>
  );
}

export default Apropos;
