import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../layout/Header";
import { toast } from "react-toastify";
import "./createservice.css";

const CreateService = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const adminToken = localStorage.getItem("adminToken");
    if (!adminToken) {
      navigate("/connexion");
      toast.error("Veuillez vous connecter en tant qu'administrateur pour accéder à cette page");
    }
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const adminToken = localStorage.getItem("adminToken");
      if (!adminToken) {
        navigate("/connexion");
        toast.error("Veuillez vous connecter en tant qu'administrateur pour accéder à cette page");
        return;
      }

      const response = await fetch("http://localhost:3005/api/services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${adminToken}`,
        },
        body: JSON.stringify({
          name: name,
          description: description,
          price: price,
        }),
      });

      if (response.ok) {
        toast.success("Le service a été créé avec succès");
        navigate("/admin/services");
      } else {
        throw new Error(`Erreur lors de la création du service : ${response.status}`);
      }
    } catch (error) {
      console.error("Erreur lors de la création du service :", error);
      toast.error("Une erreur s'est produite lors de la création du service");
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
          <h2 className="title">Créer un service</h2>
          <form onSubmit={handleSubmit}>
            <div className="admin-create-service-field">
              <label htmlFor="name">Nom du service :</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div className="admin-create-service-field">
              <label htmlFor="description">Description :</label>
              <textarea
                id="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                required
              ></textarea>
            </div>
            <div className="admin-create-service-field">
              <label htmlFor="price">Prix :</label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
                required
              />
            </div>
            <button type="submit" className="create-button">Créer</button>
            <button className="retour-button" onClick={handleRetourClick}>
              Retour
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateService;




























