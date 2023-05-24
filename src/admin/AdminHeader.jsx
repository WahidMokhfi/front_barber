import React from "react";
import { Link } from "react-router-dom";
import "./adminheader.css";

const AdminHeader = () => {
  return (
    <header className="admin-header-container-custom">
      <nav>
        <ul>
          <li>
            <Link to="/admin/home">Administration</Link>
          </li>
          <li>
            <Link to="/admin/services">Services</Link>
          </li>
          <li>
            <Link to="/admin/create-service">Créer un service</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AdminHeader;



