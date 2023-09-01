import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./updateservice.css"; 

const UpdateService = () => {
  const [serviceId, setServiceId] = useState("");
  const [service_name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const fetchService = useCallback(async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch(`http://localhost:3005/api/services/${serviceId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        const { service_name, description, price } = data;
        setName(service_name);
        setDescription(description);
        setPrice(price);
      } else {
        throw new Error(`Erreur lors de la récupération du service : ${response.status}`);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération du service :", error);
    }
  }, [serviceId]);

  useEffect(() => {
    fetchService();
  }, [fetchService]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const token = localStorage.getItem("adminToken");
    fetch(`http://localhost:3005/api/services/${serviceId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        service_name: service_name,
        description: description,
        price: price,
      }),
    })
      .then((response) => {
        if (response.ok) {
          toast.success("Le service a été mis à jour avec succès");
          navigate("/admin/services");
        } else {
          throw new Error(`Erreur lors de la mise à jour du service : ${response.status}`);
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour du service :", error);
        toast.error("Une erreur s'est produite lors de la mise à jour du service");
      });
  };

  const handleRetourClick = () => {
    navigate("/admin/");
  };

  return (
    <div className="admin-update-service-body">
      <div className="admin-update-service-container">
        <h2>Modifier le service</h2>
        <form onSubmit={handleSubmit}>
          <label>ID du service</label>
          <input
            type="text"
            value={serviceId}
            onChange={(e) => setServiceId(e.target.value)}
            placeholder="ID du service"
          />
          <label>Nom du service</label>
          <input
            type="text"
            value={service_name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nom du service"
          />
          <label>Description du service</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description du service"
          />
          <label>Prix du service</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Prix du service"
          />
          <button type="submit" className="update-button">Modifier</button>
          <button className="retour-button" onClick={handleRetourClick}>
            Retour
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateService;

















