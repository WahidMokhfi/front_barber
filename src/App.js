import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Accueil from "./pages/accueil/Accueil";
import Apropos from "./pages/apropos/Apropos";
import Services from "./pages/serv/Services";
import Tarifs from "./pages/tarifs/Tarifs";
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/services" element={<ServicesList />} />
        <Route path="/services/:id" element={<ServiceDetails />} />

      

        <Route path="/admin/*" element={<AdminRoutes />} />

        <Route path="/accueil" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/serv" element={<Services />} />
        <Route path="/tarifs" element={<Tarifs />} />
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
      <Route path="/" element={<ServicesList />} />
      <Route path="/create-service" element={<CreateService />} />
      <Route path="/:id" element={<ServiceDetails />} />
      <Route path="/:id/update" element={<UpdateService />} />
    </Routes>
  );
}

export default App;

