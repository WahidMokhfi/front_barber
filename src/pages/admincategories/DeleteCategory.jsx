import React, { useState } from "react";
import Header from "../../layout/Header";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const DeleteCategory = () => {
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const handleDeleteCategory = async () => {
    const token = localStorage.getItem("adminToken");

    try {
      const response = await fetch(`http://localhost:3005/api/categories/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        toast.success("La catégorie a été supprimée avec succès");
        navigate(`/admin/categories`);
      } else {
        throw new Error(`Erreur lors de la suppression de la catégorie : ${response.status}`);
      }
    } catch (error) {
      console.log("Une erreur s'est produite lors de la suppression de la catégorie :", error);
      toast.error("Une erreur s'est produite lors de la suppression de la catégorie");
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






