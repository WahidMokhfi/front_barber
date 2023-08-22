import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../../layout/Header";

const CreateCategory = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logique de création de la catégorie

    toast.success("La catégorie a été créée avec succès");
    navigate("/admin/category");
  };

  const handleCancel = () => {
    navigate("/admin/category");
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
