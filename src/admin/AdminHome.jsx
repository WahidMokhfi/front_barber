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
          <div className="admin-card">
            <h2>Créer un service</h2>
            <p>Créez un nouveau service.</p>
            <Link to="/admin/create-service" className="admin-card-link">
              Créer un service
            </Link>
          </div>
          <div className="admin-card">
            <h2>Voir les services</h2>
            <p>Consultez la liste des services.</p>
            <Link to="/admin/services" className="admin-card-link">
              Voir les services
            </Link>
          </div>
          <div className="admin-card">
            <h2>Mettre à jour un service</h2>
            <p>Modifiez les informations d'un service existant.</p>
            <Link to="/admin/update-service/:id" className="admin-card-link">
              Mettre à jour un service
            </Link>
          </div>
          <div className="admin-card">
            <h2>Supprimer un service</h2>
            <p>Supprimez un service existant.</p>
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















































































