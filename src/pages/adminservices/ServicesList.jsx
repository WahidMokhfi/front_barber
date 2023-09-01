import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../../layout/Header";
import "./serviceslist.css";

const ServicesList = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  const fetchServices = useCallback(async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch("http://localhost:3005/api/services", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setServices(data.data);
      } else {
        throw new Error(`Erreur lors de la récupération des services : ${response.status}`);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des services :", error);
      toast.error("Une erreur s'est produite lors de la récupération des services");
    }
  }, []);

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  const handleRetourClick = () => {
    navigate("/admin");
  };

  const handleServiceClick = (service) => {
    if (selectedService && selectedService.id === service.id) {
      setSelectedService(null);
    } else {
      setSelectedService(service);
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
                  className={`services-list-service-link ${selectedService === service ? "active" : ""}`}
                  onClick={() => handleServiceClick(service)}
                >
                  {service.service_name}
                </button>
                {selectedService === service && (
                  <div className="services-list-selected-service">
                    <p>ID : {service.id}</p>
                    <p>Nom : {service.service_name}</p>
                    <p>Description : {service.description}</p>
                    <p>Prix : {service.price}</p>
                    <p>Nom de la catégorie : {service.category_name}</p>
                    <p>ID de la catégorie : {service.category_id}</p>
                  </div>
                )}
                <Link
                  to={{
                    pathname: `/admin/update-service/${service.id}`,
                    state: { service: service },
                  }}
                  className="services-list-action-button services-list-update-button"
                >
                  <span className="services-list-button-icon">🖋️</span>Modifier
                </Link>
                <Link
                  to={{
                    pathname: `/admin/delete-service/${service.id}`,
                    state: { service: service },
                  }}
                  className="services-list-action-button services-list-delete-button"
                >
                  <span className="services-list-button-icon">🗑️</span>Supprimer
                </Link>
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













































































































































































































































































































































































































































































































































































































































































































