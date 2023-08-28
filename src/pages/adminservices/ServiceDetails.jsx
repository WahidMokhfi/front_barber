import React, { useState, useEffect } from "react";
import Header from "../../layout/Header";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./servicedetails.css";

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  const [category, setCategory] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    fetch(`http://localhost:3005/api/services/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(
            `Erreur lors de la récupération du service : ${response.status}`
          );
        }
      })
      .then((data) => {
        setService(data);
        return fetch(`http://localhost:3005/api/categories/${data.category_id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(
            `Erreur lors de la récupération de la catégorie : ${response.status}`
          );
        }
      })
      .then((data) => setCategory(data))
      .catch((error) => {
        console.error("Erreur lors de la récupération :", error);
        toast.error("Une erreur s'est produite lors de la récupération des données");
      });
  }, [id]);

  return (
    <>
      <Header />
      <div className="service-details">
        <h2>Détails du service</h2>
        <div>
          <h3>{service.name}</h3>
          <p>{service.description}</p>
          <p>Prix : {service.price}</p>
          <p>Nom de la catégorie : {category.name}</p>
          <p>ID de la catégorie : {category.id}</p>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;





















































