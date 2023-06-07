import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../layout/Header";
import { toast } from "react-toastify";
import "./createservice.css";

const CreateUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const adminToken = localStorage.getItem("adminToken");
    if (!adminToken) {
      navigate("/connexion");
      toast.error(
        "Veuillez vous connecter en tant qu'administrateur pour accéder à cette page"
      );
    }
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3005/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
          roles: ["user"], // Set the default role as "user"
        }),
      });

      if (response.ok) {
        toast.success("L'utilisateur a été créé avec succès");
        navigate("/admin/");
      } else {
        throw new Error(
          `Erreur lors de la création de l'utilisateur : ${response.status}`
        );
      }
    } catch (error) {
      console.error("Erreur lors de la création de l'utilisateur :", error);
      toast.error(
        "Une erreur s'est produite lors de la création de l'utilisateur"
      );
    }
  };

  const handleRetourClick = () => {
    navigate("/admin");
  };

  return (
    <>
      <Header />
      <div className="admin-create-service-body">
        <div className="admin-create-service-container">
          <h2 className="title">Créer un utilisateur</h2>
          <form onSubmit={handleSubmit}>
            <div className="admin-create-service-field">
              <label htmlFor="username">Nom d'utilisateur :</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
                autoComplete="username" // Ajout de l'attribut "autocomplete" pour le nom d'utilisateur
              />
            </div>
            <div className="admin-create-service-field">
              <label htmlFor="password">Mot de passe :</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                autoComplete="new-password" // Ajout de l'attribut "autocomplete" pour le mot de passe
              />
            </div>
            <button type="submit" className="create-button">
              Créer
            </button>
            <button className="retour-button" onClick={handleRetourClick}>
              Retour
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateUser;






