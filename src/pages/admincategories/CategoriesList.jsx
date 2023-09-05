import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../../layout/Header";
import "./categorieslist.css";

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const fetchCategories = useCallback(async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch("http://localhost:3005/api/categories", {
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
      toast.error("Une erreur s'est produite lors de la récupération des catégories");
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handleRetourClick = () => {
    navigate("/admin");
  };

  const handleCategoryClick = (category) => {
    if (selectedCategory && selectedCategory.id === category.id) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <>
      <Header className="categories-list-header-prefix" />
      <div className="categories-list-prefix-body">
        <div className="categories-list-container">
          <h2 className="categories-list-title">Liste des catégories</h2>
          <ul className="categories-list-ul">
            {categories.map((category) => (
              <li key={category.id} className="categories-list-item">
                <button
                  className={`categories-list-category-link ${selectedCategory === category ? "active" : ""}`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category.category_name}
                </button>
                {selectedCategory === category && (
                  <div className="categories-list-selected-category">
                    <p>ID : {category.id}</p>
                    <p>Nom : {category.category_name}</p>
                    <p>Description : {category.description}</p>
                  </div>
                )}
                <Link
                  to={{
                    pathname: `/admin/update-category/${category.id}`,
                    state: { category: category },
                  }}
                  className="categories-list-action-button categories-list-update-button"
                >
                  <span className="categories-list-button-icon">🖋️</span>Modifier
                </Link>
                <Link
                  to={{
                    pathname: `/admin/delete-category/${category.id}`,
                    state: { category: category },
                  }}
                  className="categories-list-action-button categories-list-delete-button"
                >
                  <span className="categories-list-button-icon">🗑️</span>Supprimer
                </Link>
              </li>
            ))}
          </ul>
          <div className="categories-list-button-container">
            <button className="categories-list-retour-button" onClick={handleRetourClick}>
              Retour
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesList;










