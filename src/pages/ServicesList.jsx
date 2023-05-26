import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../layout/Header";

const ServicesList = () => {
  const [services, setServices] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`http://localhost:3005/api/services`);
        if (response.ok) {
          const data = await response.json();
          setServices(data.data);
        } else {
          console.error("Erreur lors de la récupération du service :", response.status);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération du service :", error);
      }
    };

    fetchServices();
  }, []);


  return (
    <>
      <Header />
      <div>
        <p>liste des services</p>
        <ul>
          {services.map((service) => (
            <li key={service.id}>
              <Link to={`/admin/services/${service.id}/update`}>
                <h2>{service.name}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Link to={"/admin/create-service"}>Creer un service</Link>
    </>
  );
};

export default ServicesList;

