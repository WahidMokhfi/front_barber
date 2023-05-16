import React from 'react'
import './footer.css'


function Footer() {
  return (
    
<section className="footer">
  <div className="box-container">
    <div className="box">
        <h3> + de photos sur notre Instagram</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, voluptatem.</p>
        <div className="share">
          <a href="#" className="fab fa-instagram"></a>
        </div>
    </div>
    <div className="box">
        <h3>contact</h3>
        <p>07 07 07 07 07</p>
        <a href="#" className="link">barber@...</a>
    </div>
    <div className="box" >
        <h3>localisation</h3>
        <p>9 Place de Strasbourg
          33130 Bègles</p>
    </div>
    <div className="box">
      <a href="#" className="link">Mention Légales</a>
      <a href="#" className="link">CGV/CGU</a>
      <a href="#" className="link">Données personnelles</a>
    </div>
  </div>
  <div className="box-container">
      <div className="credit"> créé par <span>WahidM</span> | Tout droit réservé
      </div>
  </div>
</section>


  )
}

export default Footer