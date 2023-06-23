import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../../layout/Header";

const UpdateCategory = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch(`http://localhost:3005/api/categories/${id}`);
        const jsonResponse = await response.json();
        setName(jsonResponse.data.name);
      } catch (error) {
        console.log("Une erreur s'est produite lors de la récupération de la catégorie :", error);
        toast.error("Une erreur s'est produite lors de la récupération de la catégorie");
      }
    };

    fetchCategory();
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logique de mise à jour de la catégorie

    toast.success("La catégorie a été mise à jour avec succès");
    navigate(`/admin/category/${id}`);
  };

  const handleCancel = () => {
    navigate(`/admin/category/${id}`);
  };

  return (
    <>
      <Header />
      <div className="admin-update-category-body">
        <div className="admin-update-category-container">
          <h2 className="category-heading">Modifier la catégorie</h2>
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
            <button type="submit" className="update-button">Mettre à jour</button>
            <button type="button" className="cancel-button" onClick={handleCancel}>
              Annuler
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateCategory;
