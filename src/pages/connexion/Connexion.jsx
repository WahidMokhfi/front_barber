import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./connexion.css";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSwitchForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    const url = isLogin ? "http://localhost:3005/api/user/login" : "http://localhost:3005/api/user/register";

    fetch(url, {
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
        navigate("/avis");
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
        <input type="text" id="username" required autoComplete="username" />
        <label htmlFor="password">Password :</label>
        <input type="password" id="password" required autoComplete="current-password" />
        {!isLogin && (
          <>
            <label htmlFor="confirm-password">Confirm Password :</label>
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
  );
}

export default Login;









