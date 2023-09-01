import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./createservice.css";

const CreateService = () => {
  const [description, setDescription] = useState("");
  const [service_name, setServiceName] = useState(""); 
  const [price, setPrice] = useState("");
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const navigate = useNavigate();

  const fetchCategories = useCallback(async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch(`http://localhost:3005/api/categories`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setCategories(data.data);
      } else {
        throw new Error(`Erreur lors de la récupération des catégories : ${response.status}`);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des catégories :", error);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const token = localStorage.getItem("adminToken");
    fetch(`http://localhost:3005/api/services`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        description: description,
        service_name: service_name, 
        price: price,
        category_id: categoryId,
        category_name: categoryName,
      }),
    })
      .then((response) => {
        if (response.ok) {
          toast.success(`Le service "${service_name}" a été créé avec succès`);
          navigate("/admin/services");
        } else {
          throw new Error(`Erreur lors de la création du service : ${response.status}`);
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la création du service :", error);
        toast.error("Une erreur s'est produite lors de la création du service");
      });
  };

  const handleRetourClick = () => {
    navigate("/admin/");
  };

  return (
    <div className="admin-create-service-body">
      <div className="admin-create-service-container">
        <h2>Créer un nouveau service</h2>
        <form onSubmit={handleSubmit}>
          <label>Nom du service</label>
          <input
            type="text"
            value={service_name}
            onChange={(e) => setServiceName(e.target.value)}
            placeholder="Nom du service"
          />
          <label>Description du service</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description du service"
          />
          <label>Prix du service</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Prix du service"
          />
          <label>Catégorie</label>
          <select onChange={(e) => {
            setCategoryId(e.target.value);
            setCategoryName(e.target.options[e.target.selectedIndex].text);
          }}>
            <option value="">Sélectionner une catégorie</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.category_name}
              </option>
            ))}
          </select>
          <button type="submit" className="create-button">Créer</button>
          <button className="retour-button" onClick={handleRetourClick}>
            Retour
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateService;




























































































































