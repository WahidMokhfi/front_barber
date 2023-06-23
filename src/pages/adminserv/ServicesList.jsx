import React, { useEffect, useState } from "react";
import Header from "../../layout/Header";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./serviceslist.css";

const ServicesList = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    const fetchServices = async () => {
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

    fetchServices();
  }, []);

  const handleRetourClick = () => {
    navigate("/admin");
  };

  const handleServiceClick = (service) => {
    if (selectedService && selectedService.id === service.id) {
      setSelectedService(null); // Fermer le détail si le même service est cliqué à nouveau
    } else {
      setSelectedService(service);
    }
  };

  return (
    <>
      <Header className="services-list-header-prefix" />
      <div className="services-list-prefix-body">
        <div className="services-list-container services-list-prefix">
          <h2 className="services-list-title">Liste des services</h2>
          <div className="services-list-glass-container">
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
                </li>
              ))}
            </ul>
          </div>
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



































































































































































