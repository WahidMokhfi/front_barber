import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./deleteservice.css";

const DeleteService = () => {
  const [serviceId, setServiceId] = useState("");
  const navigate = useNavigate();

  const handleDeleteService = async () => {
    if (!serviceId) {
      toast.error("Veuillez fournir l'ID du service à supprimer.");
      return;
    }

    const confirmDelete = window.confirm("Êtes-vous sûr de vouloir supprimer ce service ?");

    if (confirmDelete) {
      try {
        const adminToken = localStorage.getItem("adminToken");
        const response = await fetch(`http://localhost:3005/api/services/${serviceId}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${adminToken}`,
          },
        });

        if (response.status === 200) {
          toast.success("Le service a été supprimé avec succès");
          navigate("/admin/services"); 
        } else {
          const responseData = await response.json();
          throw new Error(`Erreur lors de la suppression du service : ${responseData.message}`);
        }
      } catch (error) {
        console.error("Erreur lors de la suppression du service :", error);
        toast.error("Une erreur s'est produite lors de la suppression du service");
      }
    } else {
      toast.info("Suppression annulée");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleDeleteService();
  };

  return (
    <div className="admin-delete-service-body">
      <div className="admin-delete-service-container">
        <h2>Supprimer un service</h2>
        <form onSubmit={handleSubmit}>
          <label>ID du service</label>
          <input
            type="text"
            value={serviceId}
            onChange={(event) => setServiceId(event.target.value)}
            placeholder="ID du service"
          />
          <button type="submit" className="delete-button">
            Supprimer
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeleteService;




























































































































































































































































































