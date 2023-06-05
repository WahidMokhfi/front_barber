import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../layout/Header";
import { toast } from "react-toastify";
import "./serviceslist.css";

const ServicesList = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    fetch("http://localhost:3005/api/services", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(
            `Erreur lors de la récupération des services : ${response.status}`
          );
        }
      })
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          setServices(data.data);
        } else {
          throw new Error("Les données des services ne sont pas au format attendu.");
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des services :", error);
        toast.error("Une erreur s'est produite lors de la récupération des services");
      });
  }, []);

  const handleRetourClick = () => {
    navigate("/admin");
  };

  const handleServiceClick = (service) => {
    fetch(`http://localhost:3005/api/services/${service.id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(
            `Erreur lors de la récupération des détails du service : ${response.status}`
          );
        }
      })
      .then((data) => {
        setSelectedService(data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des détails du service :", error);
        toast.error("Une erreur s'est produite lors de la récupération des détails du service");
      });
  };


  const renderSelectedService = () => {
    if (selectedService) {
      return (
        <div>
          <h3>Détails du service</h3>
          <p>Nom : {selectedService.name}</p>
          <p>Description : {selectedService.description}</p>
          <p>Prix : {selectedService.price}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <Header className="header-prefix" />
      <div className="prefix-body">
        <div className="services-list-container services-prefix">
          <h2 className="services-list-title">Liste des services</h2>
          <div className="glass-container">
            <ul className="services-list-ul">
              {services.map((service) => (
                <li key={service.id} className="services-list-item">
                  <Link
                    to={`/services/${service.id}`}
                    className="service-link"
                    onClick={() => handleServiceClick(service)} 
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {renderSelectedService()} 
          <div className="button-container">
            <button className="retour-button" onClick={handleRetourClick}>
              Retour
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesList;























































































































































