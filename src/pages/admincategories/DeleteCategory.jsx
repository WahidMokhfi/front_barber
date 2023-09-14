import React, { useState, useEffect } from "react";
import Header from "../../layout/Header";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./deletecategory.css";

const DeleteCategory = () => {
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const adminToken = localStorage.getItem("adminToken"); // Récupération du token d'administration depuis le local storage

        const response = await fetch("http://localhost:3005/api/categories", {
          headers: {
            Authorization: `Bearer ${adminToken}`, // Inclusion du token d'administration dans l'en-tête
          },
        });

        const jsonResponse = await response.json();
        setCategories(jsonResponse.data);
      } catch (error) {
        console.log("Une erreur s'est produite lors de la récupération des catégories :", error);
        toast.error("Une erreur s'est produite lors de la récupération des catégories");
      }
    };

    fetchCategories();
  }, []);

  const handleDeleteCategory = async () => {
    const categoryToDelete = categories.find((category) => category.id === parseInt(categoryId, 10));

    if (categoryToDelete) {
      const confirmDelete = window.confirm(`Êtes-vous sûr de vouloir supprimer la catégorie "${categoryToDelete.category_name}" ?`);

      if (confirmDelete) {
        try {
          const adminToken = localStorage.getItem("adminToken"); // Récupération du token d'administration depuis le local storage

          await fetch(`http://localhost:3005/api/categories/${categoryToDelete.id}`, {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${adminToken}`,
            },
          });

          toast.success(`La "${categoryToDelete.category_name}" a été supprimée avec succès`);
        } catch (error) {
          console.log("Une erreur s'est produite lors de la suppression de la catégorie :", error);
          toast.error("Une erreur s'est produite lors de la suppression de la catégorie");
        }
      } else {
        toast.info("Suppression annulée");
      }
    } else {
      toast.error("Catégorie introuvable");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleDeleteCategory();
  };

  const handleRetourClick = () => {
    navigate("/admin/categories");
  };

  return (
    <>
      <Header />
      <div className="admin-delete-category-body">
        <div className="admin-delete-category-container">
          <h2 className="category-heading">Supprimer une catégorie</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="categoryId">ID de la catégorie :</label>
              <input
                type="text"
                id="categoryId"
                value={categoryId}
                onChange={(event) => setCategoryId(event.target.value)}
                required
              />
            </div>
            <button type="submit" className="delete-button">
              Supprimer
            </button>
          </form>

          <button className="retour-button" onClick={handleRetourClick}>
            Retour
          </button>
        </div>
      </div>
    </>
  );
};

export default DeleteCategory;




















