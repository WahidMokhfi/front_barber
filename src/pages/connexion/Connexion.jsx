import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../layout/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./connexion.css";

function Connexion() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSwitchForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const enteredUsername = form.elements.username.value;
    const password = form.elements.password.value;
    const endpoint = isLogin
      ? "http://localhost:3005/api/users/login"
      : "http://localhost:3005/api/users/signup";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          username: enteredUsername,
          password: password,
        }),
      });
      const data = await response.json();

      if (response.ok) {
        const jwt = data.token;
        localStorage.setItem("jwt", jwt);
        if (isLogin) {
          toast.success(`Bienvenue, ${enteredUsername} ! Connexion réussie !`);
          navigate("/avis"); // Redirige vers la page d'avis
        } else {
          if (data.data && data.data.message) {
            toast.success(data.data.message);
          } else {
            toast.success(`Bienvenue, ${enteredUsername} ! Création réussie !`);
          }
          setIsLogin(true); // Change pour le formulaire de connexion
        }
      } else {
        toast.error("Erreur lors de la connexion : " + data.message);
      }
    } catch (error) {
      toast.error("Erreur lors de la connexion : " + error);
    }
  };

  return (
    <>
      <Header />
      <ToastContainer className="toast-custom" />
      <div className="form-container-custom">
        <form className="form-custom" onSubmit={handleSubmit}>
          <h2>{isLogin ? "Connexion" : "Inscription"}</h2>
          <label>Nom d'utilisateur :</label>
          <input type="text" id="username" required autoComplete="username" />
          <label htmlFor="password">Mot de passe :</label>
          <input type="password" id="password" required autoComplete="current-password" />
          {!isLogin && (
            <>
              <label>Confirmer le mot de passe :</label>
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
      </div>
    </>
  );
}

export default Connexion;























