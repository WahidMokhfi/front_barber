import React from 'react'
import '../contact/contact.css'
import Header from '../../layout/Header';

function Contact() {
  return (
    <>
    <Header />
<section className="contact" id="contact">
    <h2 className="heading"> Nous Contacter</h2>
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
</>
  )
}

export default Contact