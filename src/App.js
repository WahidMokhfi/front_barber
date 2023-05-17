import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Accueil from "./pages/accueil/Accueil";
import Apropos from "./pages/apropos/Apropos";
import Services from "./pages/serv/Services";
import Avis from "./pages/avis/Avis";
import Contact from "./pages/contact/Contact";
import Connexion from "./pages/connexion/Connexion";
import "./App.css";

import ServicesList from "./pages/admin/ServicesList";
import CreateService from "./pages/admin/CreateService";
import ServiceDetails from "./pages/admin/ServiceDetail";
import UpdateService from "./pages/admin/UpdateService";

function App() {
return (
  // Utilisation du router principal de l'application
  <BrowserRouter>
    <Routes>
      {/* Route pour la page d'accueil */}
      <Route path="/" element={<Home />} />

      {/* Routes pour les services */}
      <Route path="/services" element={<ServicesList />} />
      <Route path="/services/:id" element={<ServiceDetails />} />

      {/* Routes pour l'administration */}
      <Route path="/admin/*" element={<AdminRoutes />} />

      {/* Routes pour les autres pages */}
      <Route path="/accueil" element={<Accueil />} />
      <Route path="/apropos" element={<Apropos />} />
      <Route path="/serv" element={<Services />} />
      <Route path="/avis" element={<Avis />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/connexion" element={<Connexion />} />
    </Routes>
  </BrowserRouter>
);
}

function AdminRoutes() {
return (
  <Routes>
    {/* Route pour la liste des services dans l'administration */}
    <Route path="/admin" element={<ServicesList />} />

    {/* Route pour la création d'un nouveau service dans l'administration */}
    <Route path="/admin/create-service" element={<CreateService />} />

    {/* Route pour afficher les détails d'un service dans l'administration */}
    <Route path="/admin/:id" element={<ServiceDetails />} />

    {/* Route pour mettre à jour un service dans l'administration */}
    <Route path="/admin/:id/update" element={<UpdateService />} />
  </Routes>
);
}

export default App;



