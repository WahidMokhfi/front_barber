import React, { useState, useEffect } from "react";
import Header from "../../layout/Header";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./categorydetails.css";

const CategoryDetails = () => {
  const { id } = useParams();
  const [category, setCategory] = useState(null);
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    fetch(`http://localhost:3005/api/categories/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
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
      .then((data) => {
        setCategory(data.data);
        setCategoryName(data.data.category_name);
        setDescription(data.data.description);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération :", error);
        toast.error("Une erreur s'est produite lors de la récupération des données");
      });
  }, [id]);

  return (
    <>
      <Header />
      <div className="category-details">
        <h2>Détails de la catégorie</h2>
        <div>
          <h3>{categoryName}</h3>
          <p>Nom de la catégorie : {categoryName}</p>
          <p>Description : {description}</p>
          <p>ID : {category && category.id}</p>
          {/* Ajoutez d'autres détails du modèle Category ici */}
        </div>
      </div>
    </>
  );
};

export default CategoryDetails;

