import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminHome from "./admin/AdminHome";
import Apropos from "./pages/apropos/Apropos";
import Services from "./pages/serv/Services";
import Avis from "./pages/avis/Avis";
import Contact from "./pages/contact/Contact";
import Connexion from "./pages/connexion/Connexion";
import Deconnexion from "./pages/connexion/Deconnexion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import ServicesList from "./pages/ServicesList";
import CreateService from "./pages/CreateService";
import ServiceDetails from "./pages/ServiceDetails";
import UpdateService from "./pages/UpdateService";
import Accueil from "./pages/accueil/Accueil";
import DeleteService from "./pages/DeleteService";

import CreateUser from "./pages/CreateUser";
import UsersList from "./pages/UsersList";
import UpdateUser from "./pages/UpdateUser";
import DeleteUser from "./pages/DeleteUser";

import CreateReview from "./pages/CreateReview";

function App() {
  return (
  <BrowserRouter>
    <ToastContainer position="top-right" />
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/" element={<Accueil />} />
      <Route path="/apropos" element={<Apropos />} />
      <Route path="/serv" element={<Services />} />
      <Route path="/avis" element={<Avis />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/connexion" element={<Connexion />} />
      <Route path="/deconnexion" element={<Deconnexion />} />

      <Route path="/admin/" element={<AdminHome />} />
      <Route path="/admin/services" element={<ServicesList />} />
      <Route path="/admin/services/:id" element={<ServiceDetails />} />
      <Route path="/admin/create-service" element={<CreateService />} />
      <Route path="/admin/delete-service/:id" element={<DeleteService />} />
      <Route path="/admin/update-service/:id" element={<UpdateService />} />

      <Route path="/admin/create-user" element={<CreateUser />} />
      <Route path="/admin/users" element={<UsersList />} />
      <Route path="/admin/update-user/:id" element={<UpdateUser />} />
      <Route path="/admin/delete-user/:id" element={<DeleteUser />} />

      <Route path="/create-review" element={<CreateReview />} />
    </Routes>
  </BrowserRouter>
);
}

export default App;

















































































































































































































































































