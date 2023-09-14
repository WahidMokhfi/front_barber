import React, { useState, useEffect } from "react";
import Header from "../../layout/Header";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./deleteservice.css";

const DeleteService = () => {
  const [services, setServices] = useState([]);
  const [serviceId, setServiceId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const adminToken = localStorage.getItem("adminToken"); // Récupération du token d'administration depuis le local storage

        const response = await fetch("http://localhost:3005/api/services", {
          headers: {
            Authorization: `Bearer ${adminToken}`, // Inclusion du token d'administration dans l'en-tête
          },
        });

        const jsonResponse = await response.json();
        setServices(jsonResponse.data);
      } catch (error) {
        console.log("Une erreur s'est produite lors de la récupération des services :", error);
        toast.error("Une erreur s'est produite lors de la récupération des services");
      }
    };

    fetchServices();
  }, []);

  const handleDeleteService = async () => {
    const serviceToDelete = services.find((service) => service.id === parseInt(serviceId, 10));

    if (serviceToDelete) {
      const confirmDelete = window.confirm(`Êtes-vous sûr de vouloir supprimer le service "${serviceToDelete.service_name}" ?`);

      if (confirmDelete) {
        try {
          const adminToken = localStorage.getItem("adminToken"); // Récupération du token d'administration depuis le local storage

          await fetch(`http://localhost:3005/api/services/${serviceToDelete.id}`, {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${adminToken}`,
            },
          });

          toast.success(`Le service "${serviceToDelete.service_name}" a été supprimé avec succès`);
        } catch (error) {
          console.log("Une erreur s'est produite lors de la suppression du service :", error);
          toast.error("Une erreur s'est produite lors de la suppression du service");
        }
      } else {
        toast.info("Suppression annulée");
      }
    } else {
      toast.error("Service introuvable");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleDeleteService();
  };

  const handleRetourClick = () => {
    navigate("/admin/services");
  };

  return (
    <>
      <Header />
      <div className="admin-delete-service-body">
        <div className="admin-delete-service-container">
          <h2 className="service-heading">Supprimer un service</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="serviceId">ID du service :</label>
              <input
                type="text"
                id="serviceId"
                value={serviceId}
                onChange={(event) => setServiceId(event.target.value)}
                required
              />
            </div>
            <button type="submit" className="delete-button">
              Supprimer
            </button>
          </form>

          <button className="retour-button" onClick={handleRetourClick}>
            Retour
          </button>
        </div>
      </div>
    </>
  );
};

export default DeleteService;






































































































































































































































































































