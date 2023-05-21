import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../layout/Header";
import "./connexion.css";

function Connexion() {
  const [isLogin, setIsLogin] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSwitchForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.elements.username.value;
    const password = form.elements.password.value;
    const endpoint = isLogin
      ? "http://localhost:3005/api/users/login"
      : "http://localhost:3005/api/users/signup";
  
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const jwt = data.token;
        localStorage.setItem("jwt", jwt);
        setSuccessMessage("Connexion réussie !");
        navigate("/avis");
      })
      .catch((error) => {
        console.error("Erreur lors de la connexion :", error);
      });
  };
  

  return (
    <>
      <Header />
      <div className="form-container-custom">
        <form className="form-custom" onSubmit={handleSubmit}>
          <h2>{isLogin ? "Connexion" : "Inscription"}</h2>
          <label >Nom d'utilisateur :</label>
          <input type="text" id="username" required autoComplete="username" />
          <label htmlFor="password">Mot de passe :</label>
          <input type="password" id="password" required autoComplete="current-password" />
          {!isLogin && (
            <>
              <label >Confirmer le mot de passe :</label>
              <input type="password" id="confirm-password" required autoComplete="new-password" />
            </>
          )}
          <button type="submit">{isLogin ? "Se connecter" : "S'inscrire"}</button>
          <div className="switch-form-custom" onClick={handleSwitchForm}>
            <div className="form-bottom">
              <span>{isLogin ? "Pas encore de compte ?" : "Déjà inscrit ?"}</span>
              <button type="button" className="auth-btn">
                {isLogin ? "S'inscrire" : "Se connecter"}
              </button>
            </div>
          </div>
        </form>
        {successMessage && <p>{successMessage}</p>}
      </div>
    </>
  );
}

export default Connexion;




