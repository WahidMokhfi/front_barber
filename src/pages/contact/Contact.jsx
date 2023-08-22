import React from 'react';
import '../contact/contact.css';
import Header from '../../layout/Header';

function Contact() {
  return (
    <>
      <Header />
      <section className="contact" id="contact">
        <h2 className="heading">Contact</h2>
        <div className="contact-container">
          <div className="map-section">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d90598.08628014172!2d-0.6400038301390164!3d44.79731237436121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0xd5526e6989399bd%3A0xdb3569ab8938da85!2s9%20Pl.%20de%20Strasbourg%2C%2033130%20B%C3%A8gles!3m2!1d44.797336699999995!2d-0.5576035!5e0!3m2!1sfr!2sfr!4v1692617937862!5m2!1sfr!2sfr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="image-section">
            <img src="img/IMG_BB3.PNG" alt="" className="responsive-image" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;






