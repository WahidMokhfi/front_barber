import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./connexion.css";

function Connexion() {
  const [isLogin, setIsLogin] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate(); // Ajout de l'importation et de la constante navigate

  const handleSwitchForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    fetch("http://localhost:3000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
        navigate("/avis"); // Utilisation de navigate pour la navigation
      })
      .catch((error) => {
        console.error("Erreur lors de la connexion :", error);
      });
  };

  return (
    <div className="form-container-custom">
      <form className="form-custom" onSubmit={handleSubmit}>
        <h2>{isLogin ? "Connexion" : "Inscription"}</h2>
        <label htmlFor="username">Username :</label>
        <input type="text" id="username" required />
        <label htmlFor="password">Password :</label>
        <input type="password" id="password" required />
        {!isLogin && (
          <>
            <label htmlFor="confirm-password">Confirm Password :</label>
            <input type="password" id="confirm-password" required />
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
  );
}

export default Connexion;





