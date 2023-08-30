import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../../layout/Header";

const CreateCategory = () => {
  const [name, setName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const adminToken = localStorage.getItem("adminToken");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3005/api/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${adminToken}`,
        },
        body: JSON.stringify({
          name: name,
          category_name: categoryName,
          description: description,
        }),
      });

      if (response.ok) {
        toast.success("La catégorie a été créée avec succès");
        navigate("/admin/categories");
      } else {
        toast.error("Une erreur s'est produite lors de la création de la catégorie");
      }
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
      toast.error("Une erreur s'est produite lors de la création de la catégorie");
    }
  };

  const handleCancel = () => {
    navigate("/admin/categories");
  };

  return (
    <>
      <Header />
      <div className="admin-create-category-body">
        <div className="admin-create-category-container">
          <h2 className="category-heading">Créer une catégorie</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Nom :</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="categoryName">Nom de catégorie :</label>
              <input
                type="text"
                id="categoryName"
                value={categoryName}
                onChange={(event) => setCategoryName(event.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="description">Description :</label>
              <textarea
                id="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                required
              />
            </div>
            <button type="submit" className="create-button">Créer</button>
            <button type="button" className="cancel-button" onClick={handleCancel}>
              Annuler
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateCategory;










