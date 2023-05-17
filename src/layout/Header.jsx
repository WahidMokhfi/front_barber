import React, { useState } from "react";
import './header.css';
import { Link } from "react-router-dom";

const Header = () => {
const [navbarActive, setNavbarActive] = useState(false);

const handleMenuClick = () => {
  setNavbarActive(!navbarActive);
};

const handleCloseClick = () => {
  setNavbarActive(false);
};

return (
  <header className="header">
    <Link to="/" className="logo">
      Barber Bègles
    </Link>

    <nav className={`navbar ${navbarActive ? "active" : ""}`}>
      <div id="close-navbar" className="fas fa-times" onClick={handleCloseClick}></div>
      <a href="#accueil">Accueil</a>
      <a href="#apropos">A propos</a>
      <a href="#services">Services</a>
      <a href="#avis">Avis</a>
      <a href="#contact">Contact</a>
      <Link to="/connexion" aria-current="page">Connexion</Link>
    </nav>

    <div id="menu-burger" className={`fas fa-bars ${navbarActive ? "active" : ""}`} onClick={handleMenuClick}></div>
  </header>
);
};

export default Header;









