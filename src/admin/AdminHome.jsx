import React from "react";
import { Link } from "react-router-dom";
import Header from "../layout/Header";
import "./admin.css";

const AdminHome = () => {
  return (
    <>
      <Header />
      <div className="admin-body">
        <h1 className="admin-title">Interface d'administration</h1>
        <div className="admin-container">
          <div className="admin-column-left">
            <div className="admin-card">
              <h2>Create a service</h2>
              <p>Créez un service.</p>
              <Link to="/admin/create-service" className="admin-card-link">
                CREATE
              </Link>
            </div>
            <div className="admin-card">
              <h2>Read services</h2>
              <p>Liste et détails des services.</p>
              <Link to="/admin/services" className="admin-card-link">
                READ / UPDATE / DELETE
              </Link>
            </div>
          </div>
          <div className="admin-column-right">
            <div className="admin-card">
              <h2>Create a user</h2>
              <p>Créez un nouvel utilisateur.</p>
              <Link to="/admin/create-user" className="admin-card-link">
                CREATE
              </Link>
            </div>
            <div className="admin-card">
              <h2>Read users</h2>
              <p>Liste et détails des utilisateurs.</p>
              <Link to="/admin/users" className="admin-card-link">
                READ / UPDATE / DELETE
              </Link>
            </div>
          </div>
          <div className="admin-column-left">
            <div className="admin-card">
              <h2>Read reviews</h2>
              <p>Liste et détails des avis.</p>
              <Link to="/admin/reviews" className="admin-card-link">
                READ / UPDATE / DELETE
              </Link>
            </div>
          </div>
          <div className="admin-column-right">
            <div className="admin-card">
              <h2>Create a category</h2>
              <p>Créez une catégorie.</p>
              <Link to="/admin/create-category" className="admin-card-link">
                CREATE / POST
              </Link>
            </div>
            <div className="admin-card">
              <h2>Read categories</h2>
              <p>Liste et détails des catégories.</p>
              <Link to="/admin/categories" className="admin-card-link">
                READ / UPDATE / DELETE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHome;






































































































































































































































































































































































