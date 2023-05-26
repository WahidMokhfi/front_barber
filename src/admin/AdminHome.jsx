import React from "react";
import { Link } from "react-router-dom";
import "./admin.css";

const AdminHome = () => {
  return (
    <div className="admin-container">
      <h1>Bienvenue dans l'interface d'administration</h1>
      <div className="admin-card">
        <h2>Services</h2>
        <p>Gérez les services disponibles.</p>
        <Link to="/admin/services" className="admin-card-link">
          Voir les services
        </Link>
      </div>
      <div className="admin-card">
        <h2>Créer un service</h2>
        <p>Créez un nouveau service.</p>
        <Link to="/admin/create-service" className="admin-card-link">
          Créer un service
        </Link>
      </div>
      {/* Ajoutez d'autres cartes pour les différentes fonctionnalités d'administration */}
    </div>
  );
};

export default AdminHome;


