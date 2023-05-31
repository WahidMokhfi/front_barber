import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ServicesList = () => {
  const [services, setServices] = useState([]);

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
          throw new Error(`Erreur lors de la récupération des services : ${response.status}`);
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

  return (
    <>
      <Header />
      <div className="services-list">
        <h2>Liste des services</h2>
        <ul>
          {services.map((service) => (
            <li key={service.id}>
              <Link to={`/services/${service.id}`}>{service.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ServicesList;



































