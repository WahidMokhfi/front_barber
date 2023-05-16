import React, { useState } from "react";
import "./connexion.css";

function Connexion() {
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitchForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="form-container-custom">
      <form className="form-custom">
        <h2>{isLogin ? "Connexion" : "Inscription"}</h2>
        <label htmlFor="email">Adresse email :</label>
        <input type="email" id="email" required />
        <label htmlFor="password">Mot de passe :</label>
        <input type="password" id="password" required />
        {!isLogin && (
          <>
            <label htmlFor="confirm-password">Confirmation du mot de passe :</label>
            <input type="password" id="confirm-password" required />
          </>
        )}
        <button type="submit">{isLogin ? "Se connecter" : "S'inscrire"}</button>
        <div className="switch-form-custom" onClick={handleSwitchForm}>

        <div class="form-bottom">
          <span>{isLogin ? "Pas encore de compte ?" : "Déjà inscrit ?"}</span>
          <button type="button" class="auth-btn">{isLogin ? "S'inscrire" : "Se connecter"}</button>

        </div>
        </div>
      </form>
    </div>
  );
}

export default Connexion;
