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

    // Vérification des rôles en fonction des utilisateurs
    if (enteredUsername === "wahid") {
      if (password === "mdp") {
        toast.success(`Bienvenue, ${enteredUsername} ! Connexion réussie en tant qu'administrateur !`);
        navigate("/admin/home"); // Redirige vers la page admin
      } else {
        toast.error("Mot de passe incorrect !");
      }
    } else {
      if (password === "mdp") {
        toast.success(`Bienvenue, ${enteredUsername} ! Connexion réussie en tant qu'utilisateur !`);
        navigate("/avis"); // Redirige vers la page avis
      } else {
        toast.error("Mot de passe incorrect !");
      }
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



























