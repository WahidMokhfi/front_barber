import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import './deleteservice.css';

const DeleteService = () => {
  const [services, setServices] = useState({});
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("http://localhost:3005/api/services");
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
    let serviceToDelete = null;

    for (const key in services) {
      if (services.hasOwnProperty(key) && services[key].id === parseInt(name)) {
        serviceToDelete = services[key];
        break;
      }
    }

    if (serviceToDelete) {
      const confirmDelete = window.confirm("Êtes-vous sûr de vouloir supprimer ce service ?");

      if (confirmDelete) {
        try {
          await fetch(`http://localhost:3005/api/services/${serviceToDelete.id}`, {
            method: "DELETE",
          });

          const updatedServices = { ...services };
          delete updatedServices[serviceToDelete.id];
          setServices(updatedServices);

          toast.success("Le service a été supprimé avec succès");
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
    navigate("/admin");
  };

  return (
    <>
      <Header />
      <div className="admin-delete-service-body">
        <div className="admin-delete-service-container">
          <h2 className="service-heading">Supprimer un service</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">ID du service :</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <button type="submit" className="delete-button">Supprimer</button>
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























































































































