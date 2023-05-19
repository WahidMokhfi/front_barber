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
      <Link className="link-custom" to="/" aria-current="page">accueil</Link>
      <Link className="link-custom" to="/apropos" aria-current="page">apropos</Link>
      <Link className="link-custom" to="/serv" aria-current="page">services</Link>
      <Link className="link-custom" to="/avis" aria-current="page">avis</Link>
      <Link className="link-custom" to="/contact" aria-current="page">contact</Link>
      <Link className="link-custom" to="/connexion" aria-current="page">connexion</Link>


    </nav>

    <div id="menu-burger" className={`fas fa-bars ${navbarActive ? "active" : ""}`} onClick={handleMenuClick}></div>
  </header>
);
};

export default Header;









