import React, { useEffect, useState } from "react";
import Header from "../../layout/Header";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./deletecategory.css";

const DeleteCategory = () => {
  const [categories, setCategories] = useState({});
  const [id, setId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:3005/api/category");
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
    let categoryToDelete = null;

    for (const key in categories) {
      if (categories.hasOwnProperty(key) && categories[key].id === parseInt(id)) {
        categoryToDelete = categories[key];
        break;
      }
    }

    if (categoryToDelete) {
      const confirmDelete = window.confirm("Êtes-vous sûr de vouloir supprimer cette catégorie ?");

      if (confirmDelete) {
        try {
          await fetch(`http://localhost:3005/api/category/${categoryToDelete.id}`, {
            method: "DELETE",
          });

          toast.success("La catégorie a été supprimée avec succès");
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
    navigate("/admin");
  };

  return (
    <>
      <Header />
      <div className="admin-delete-category-body">
        <div className="admin-delete-category-container">
          <h2 className="category-heading">Supprimer une catégorie</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="id">ID de la catégorie :</label>
              <input
                type="text"
                id="id"
                value={id}
                onChange={(event) => setId(event.target.value)}
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

