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
    const email = form.elements.email ? form.elements.email.value : null;
    const phoneNumber = form.elements.phone_number ? form.elements.phone_number.value : null;
    const endpoint = isLogin
      ? "http://localhost:3005/api/users/login"
      : "http://localhost:3005/api/users/signup";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: enteredUsername,
          password: password,
          email: email,
          phone_number: phoneNumber,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        const { user, token } = responseData;
        if (user.roles.includes("admin")) {
          localStorage.setItem("adminToken", token);
          localStorage.setItem("adminName", enteredUsername);
          toast.success(`Bienvenue, ${enteredUsername} !`);
          navigate("/admin");
        } else {
          localStorage.setItem("userToken", token);
          localStorage.setItem("userName", enteredUsername);
          localStorage.setItem("userId", user.id);
          toast.success(`Bienvenue, ${enteredUsername} !`);
          navigate("/create-review");
        }
      } else {
        const errorData = await response.json();
        toast.error("Erreur lors de la connexion : " + errorData.message);
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
          <label htmlFor="username">Nom d'utilisateur :</label>
          <input type="text" id="username" name="username" required autoComplete="username" />
          <label htmlFor="password">Mot de passe :</label>
          <input type="password" id="password" name="password" required autoComplete="current-password" />
          {!isLogin && (
            <>
              <label htmlFor="email">Email :</label>
              <input type="email" id="email" name="email" required autoComplete="email" />
              <label htmlFor="phone_number">Numéro de téléphone :</label>
              <input type="tel" id="phone_number" name="phone_number" required autoComplete="tel" />
            </>
          )}
          <button type="submit">{isLogin ? "Se connecter" : "S'inscrire"}</button>
        </form>
        <div className="switch-form-custom">
          <span>{isLogin ? "Pas encore de compte ?" : "Déjà un compte ?"}</span>
          <button type="button" onClick={handleSwitchForm}>{isLogin ? "S'inscrire" : "Se connecter"}</button>
        </div>
      </div>
    </>
  );
}

export default Connexion;


















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































