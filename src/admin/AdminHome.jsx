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
          <div className="admin-card large">
            <h2>Vos Services</h2>
            <p>Gérez les services disponibles.</p>
            <Link to="/admin/services" className="admin-card-link">
              Voir les services
            </Link>
          </div>
          <div className="admin-card create-service">
            <h2>Créer un service</h2>
            <p>Créez un nouveau service.</p>
            <Link to="/admin/create-service" className="admin-card-link">
              Créer un service
            </Link>
          </div>
          <div className="admin-card delete-service">
            <h2>Supprimer un service</h2>
            <p>Supprimez un service existant.</p>
            <Link to="/admin/services/:id/delete" className="admin-card-link">
              Supprimer un service
            </Link>
          </div>
          {/* Ajoutez d'autres cartes pour les différentes fonctionnalités d'administration */}
        </div>
      </div>
    </>
  );
};

export default AdminHome;

