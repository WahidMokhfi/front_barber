import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../layout/Header";
import { toast } from "react-toastify";

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

  return (
    <>
      <Header />
      <div className="admin-body">
        <div className="admin-container">
          <h2>Créer un service</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Nom du service :</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="description">Description :</label>
              <textarea
                id="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="price">Prix :</label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
                required
              />
            </div>
            <button type="submit">Créer</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateService;



























