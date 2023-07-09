import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../layout/Header";
import { toast } from "react-toastify";
import "./createuser.css";
import Select from 'react-select';

const CreateUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState(null);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
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

    if (!selectedRole) {
      toast.error("Veuillez sélectionner un rôle");
      return;
    }

    try {
      const response = await fetch("http://localhost:3005/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          role: selectedRole.value,
          email,
          phone_number: phoneNumber,
        }),
      });

      if (response.ok) {
        if (selectedRole.value === 'admin') {
          toast.success("L'administrateur a été créé avec succès");
        } else {
          toast.success("L'utilisateur a été créé avec succès");
        }
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
      <div className="admin-create-user-body">
        <div className="admin-create-user-container">
          <h2>Créer un utilisateur</h2>
          <form onSubmit={handleSubmit} className="admin-create-user-form">
            <label htmlFor="username">Nom d'utilisateur :</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
            />
            <label htmlFor="password">Mot de passe :</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="new-password"
            />
            <label htmlFor="role">Rôle :</label>
            <Select
              id="role"
              name="role"
              value={selectedRole}
              onChange={(selectedOption) => setSelectedRole(selectedOption)}
              options={[
                { value: "admin", label: "Admin" },
                { value: "user", label: "Utilisateur" },
              ]}
              required
            />
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
            <label htmlFor="phone_number">Numéro de téléphone :</label>
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              autoComplete="tel"
            />
            <div className="admin-create-user-buttons">
              <button type="submit">Créer</button>
              <button type="button" onClick={handleRetourClick}>
                Retour
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateUser;




















