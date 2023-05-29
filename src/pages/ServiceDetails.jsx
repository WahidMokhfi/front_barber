import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../layout/Header";

const ServiceDetails = () => {
  const [service, setService] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchService = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const response = await fetch(`http://localhost:3005/api/services/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setService(data.data);
        } else {
          throw new Error(`Erreur lors de la récupération du service : ${response.status}`);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération du service :", error);
      }
    };

    fetchService();
  }, [id]);

  return (
    <>
      <Header />
      {service ? (
        <>
          <h1>Détails du service : {service.name}</h1>
          <p>Description : {service.description}</p>
          <p>Prix : {service.price}</p>
        </>
      ) : (
        <p>Chargement...</p>
      )}
    </>
  );
};

export default ServiceDetails;











