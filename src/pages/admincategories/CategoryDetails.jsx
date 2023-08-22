import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../layout/Header";
import { toast } from 'react-toastify';
import "./categorydetails.css";

const CategoryDetails = () => {
  const { id } = useParams();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch(`http://localhost:3005/api/categories/${id}`);
        const jsonResponse = await response.json();
        setCategory(jsonResponse.data);
      } catch (error) {
        console.log("Une erreur s'est produite lors de la récupération de la catégorie :", error);
        toast.error("Une erreur s'est produite lors de la récupération de la catégorie");
      }
    };

    fetchCategory();
  }, [id]);

  if (!category) {
    return (
      <>
        <Header />
        <div className="admin-category-details-body">
          <div className="admin-category-details-container">
            <h2 className="category-heading">Détails de la catégorie</h2>
            <p>Chargement en cours...</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="admin-category-details-body">
        <div className="admin-category-details-container">
          <h2 className="category-heading">Détails de la catégorie</h2>
          <div className="category-details">
            <p>ID : {category.id}</p>
            <p>Nom : {category.name}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryDetails;
