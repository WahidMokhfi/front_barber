import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../layout/Header";
import { toast } from "react-toastify";
import "./serviceslist.css";

const ServicesList = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    const token = localStorage.getItem("adminToken");

    try {
      const response = await fetch("http://localhost:3005/api/services", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setServices(data.data);
      } else {
        throw new Error(
          `Erreur lors de la récupération des services : ${response.status}`
        );
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des services :", error);
      toast.error(
        "Une erreur s'est produite lors de la récupération des services"
      );
    }
  };

  const handleRetourClick = () => {
    navigate("/admin");
  };

  const handleServiceClick = (service) => {
    setSelectedService(selectedService === service ? null : service);
  };

  const handleDeleteService = async (serviceId, serviceName) => {
    const token = localStorage.getItem("adminToken");

    if (window.confirm(`Êtes-vous sûr de vouloir supprimer le service "${serviceName}" ?`)) {
      try {
        const response = await fetch(`http://localhost:3005/api/services/${serviceId}`, {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const updatedServices = services.filter((service) => service.id !== serviceId);
          setServices(updatedServices);

          toast.success(`Le service "${serviceName}" a été supprimé avec succès.`);
        } else {
          throw new Error(`Erreur lors de la suppression du service : ${response.status}`);
        }
      } catch (error) {
        console.error("Erreur lors de la suppression du service :", error);
        toast.error("Une erreur s'est produite lors de la suppression du service.");
      }
    }
  };

  return (
    <>
      <Header className="services-list-header-prefix" />
      <div className="services-list-prefix-body">
        <div className="services-list-container">
          <h2 className="services-list-title">Liste des services</h2>
          <ul className="services-list-ul">
            {services.map((service) => (
              <li key={service.id} className="services-list-item">
                <button
                  className={`services-list-service-link ${
                    selectedService === service ? "active" : ""
                  }`}
                  onClick={() => handleServiceClick(service)}
                >
                  {service.name}
                </button>
                {selectedService === service && (
                  <div className="services-list-selected-service">
                    <h3>Détails du service</h3>
                    <p className="services-list-service-detail">ID : {service.id}</p>
                    <p className="services-list-service-detail">Nom : {service.name}</p>
                    <p className="services-list-service-detail">
                      Description : {service.description}
                    </p>
                    <p className="services-list-service-detail">Prix : {service.price}</p>
                  </div>
                )}
                <Link
                  to={`/admin/update-service/${service.id}`} // Utilisation de Link pour créer le lien
                  className="services-list-action-button services-list-update-button"
                >
                  <span className="services-list-button-icon">🖋️</span>Modifier
                </Link>
                <button
                  onClick={() => handleDeleteService(service.id, service.name)}
                  className="services-list-action-button services-list-delete-button"
                >
                  <span className="services-list-button-icon">🗑️</span>Supprimer
                </button>
              </li>
            ))}
          </ul>
          <div className="services-list-button-container">
            <button className="services-list-retour-button" onClick={handleRetourClick}>
              Retour
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesList;



























































































































