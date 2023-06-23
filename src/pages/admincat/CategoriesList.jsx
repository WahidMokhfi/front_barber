import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import Header from "../../layout/Header";
import "./categorieslist.css";

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:3005/api/categories");
        const jsonResponse = await response.json();
        setCategories(jsonResponse.data);
      } catch (error) {
        console.log("Une erreur s'est produite lors de la récupération des catégories :", error);
        toast.error("Une erreur s'est produite lors de la récupération des catégories");
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
      <Header />
      <div className="admin-categories-list-body">
        <div className="admin-categories-list-container">
          <h2 className="category-heading">Liste des catégories</h2>
          <ul className="categories-list">
            {categories.map((category) => (
              <li key={category.id}>
                <Link to={`/admin/category/${category.id}`} className="category-link">
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CategoriesList;
