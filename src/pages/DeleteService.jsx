import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const DeleteService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("http://localhost:3005/api/services");
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.log("Une erreur s'est produite lors de la récupération des services :", error);
      }
    };

    fetchServices();
  }, []);

  const handleDeleteService = async (serviceId) => {
    try {
      const adminToken = localStorage.getItem("adminToken");

      if (adminToken) {
        // Afficher le toast de confirmation
        toast.warn("Êtes-vous sûr de vouloir supprimer ce service ?", {
          position: "top-right",
          autoClose: false,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          closeButton: false,
          toastId: "confirm-delete",
          render: ({ closeToast }) => (
            <div>
              <p>Êtes-vous sûr de vouloir supprimer ce service ?</p>
              <button onClick={() => handleConfirmDelete(serviceId, closeToast)}>Valider</button>
              <button onClick={closeToast}>Annuler</button>
            </div>
          ),
        });
      }
    } catch (error) {
      console.log("Une erreur s'est produite lors de la suppression du service :", error);
    }
  };

  const handleConfirmDelete = async (serviceId, closeToast) => {
    try {
      const adminToken = localStorage.getItem("adminToken");

      if (adminToken) {
        const response = await fetch(`http://localhost:3005/api/services/${serviceId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${adminToken}`,
          },
        });

        if (response.ok) {
          toast.success("Le service a été supprimé avec succès");
          // Actualiser la liste des services après la suppression
          const updatedServices = services.filter((service) => service.id !== serviceId);
          setServices(updatedServices);
        } else {
          toast.error("Une erreur s'est produite lors de la suppression du service");
        }
      }
    } catch (error) {
      console.log("Une erreur s'est produite lors de la suppression du service :", error);
    } finally {
      closeToast(); // Fermer le toast de confirmation
    }
  };

  if (!Array.isArray(services)) {
    return null; // ou afficher un message indiquant l'absence de services
  }

  return (
    <>
      <div>
        {services.map((service) => (
          <div key={service.id}>
            <p>{service.name}</p>
            <button onClick={() => handleDeleteService(service.id)}>Supprimer</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default DeleteService;











































