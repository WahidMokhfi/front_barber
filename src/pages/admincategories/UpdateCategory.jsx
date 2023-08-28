import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../../layout/Header";

const UpdateCategory = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch(`http://localhost:3005/api/categories/${id}`);
        const jsonResponse = await response.json();
        setName(jsonResponse.data.name);
        setCategoryName(jsonResponse.data.category_name);
        setDescription(jsonResponse.data.description);
      } catch (error) {
        console.log("Une erreur s'est produite lors de la récupération de la catégorie :", error);
        toast.error("Une erreur s'est produite lors de la récupération de la catégorie");
      }
    };

    fetchCategory();
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const token = localStorage.getItem("adminToken");
    fetch(`http://localhost:3005/api/categories/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        category_name: categoryName,
        description: description,
      }),
    })
      .then((response) => {
        if (response.ok) {
          toast.success("La catégorie a été mise à jour avec succès");
          navigate(`/admin/categories`);
        } else {
          throw new Error(`Erreur lors de la mise à jour de la catégorie : ${response.status}`);
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour de la catégorie :", error);
        toast.error("Une erreur s'est produite lors de la mise à jour de la catégorie");
      });
  };

  const handleCancel = () => {
    navigate(`/admin/categories`);
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
            <div>
              <label htmlFor="categoryName">Nom de la catégorie :</label>
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

