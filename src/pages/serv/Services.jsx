import React from 'react';
import '../serv/services.css';

function Services() {
  return (
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
  );
}

export default Services;
