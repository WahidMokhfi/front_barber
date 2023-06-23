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
          username: username,
          password: password,
          role: selectedRole.value,
          email: email,
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
          <h2 className="title">Créer un utilisateur</h2>
          <form onSubmit={handleSubmit}>
            <div className="admin-create-user-field">
              <label htmlFor="username">Nom d'utilisateur :</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
                autoComplete="username"
              />
            </div>
            <div className="admin-create-user-field">
              <label htmlFor="password">Mot de passe :</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                autoComplete="new-password"
              />
            </div>
            <div className="admin-create-user-field">
              <label htmlFor="email">Email :</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="admin-create-user-field">
              <label htmlFor="phone_number">Numéro de téléphone :</label>
              <input
                type="tel"
                id="phone_number"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
                required
              />
            </div>
            <div className="admin-create-user-field">
              <label htmlFor="role">Rôle :</label>
              <Select
                id="role"
                value={selectedRole}
                options={[
                  { value: 'user', label: 'Utilisateur' },
                  { value: 'admin', label: 'Administrateur' }
                ]}
                onChange={setSelectedRole}
                required
                styles={{
                  control: (provided) => ({
                    ...provided,
                    fontSize: '18px'
                  }),
                  singleValue: (provided) => ({
                    ...provided,
                    fontSize: '18px'
                  }),
                  menu: (provided) => ({
                    ...provided,
                    fontSize: '18px'
                  })
                }}
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
















