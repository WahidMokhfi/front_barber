// AdminHome.jsx
import React from "react";
import { Link } from "react-router-dom";
import Header from "../layout/Header";
import "./admin.css";

const AdminHome = () => {
  return (
    <>
      <Header />
      <div className="admin-body">
        <div className="admin-container grid">
          <h1 className="admin-title">Interface d'administration</h1>
          <div className="admin-card">
            <h2>Create a service</h2>
            <p>Créez un nouveau service.</p>
            <Link to="/admin/create-service" className="admin-card-link">
              Créer un service
            </Link>
          </div>
          <div className="admin-card">
            <h2>Read services</h2>
            <p>Consultez la liste des services.</p>
            <Link to="/admin/services" className="admin-card-link">
              Voir les services
            </Link>
          </div>
          <div className="admin-card">
            <h2>Update a service</h2>
            <p>Modifiez les informations d'un service.</p>
            <Link to="/admin/update-service/:id" className="admin-card-link">
              Mettre à jour un service
            </Link>
          </div>
          <div className="admin-card">
            <h2>Delete a service</h2>
            <p>Supprimez un service.</p>
            <Link to="/admin/delete-service/:id" className="admin-card-link">
              Supprimer un service
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHome;
















































































