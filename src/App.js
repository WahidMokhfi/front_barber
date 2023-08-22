import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminHome from "./admin/AdminHome";
import Apropos from "./pages/apropos/Apropos";
import Services from "./pages/services/Services";
import Avis from "./pages/avis/Avis.jsx";
import Contact from "./pages/contact/Contact";
import Connexion from "./pages/connexion/Connexion";
import Deconnexion from "./pages/connexion/Deconnexion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Accueil from "./pages/accueil/Accueil";

import ServicesList from "./pages/adminservices/ServicesList";
import CreateService from "./pages/adminservices/CreateService";
import ServiceDetails from "./pages/adminservices/ServiceDetails";
import UpdateService from "./pages/adminservices/UpdateService";
import DeleteService from "./pages/adminservices/DeleteService";

import UsersList from "./pages/adminusers/UsersList";
import CreateUser from "./pages/adminusers/CreateUser";
import UserDetails from "./pages/adminusers/UserDetails";
import UpdateUser from "./pages/adminusers/UpdateUser";
import DeleteUser from "./pages/adminusers/DeleteUser";

import ReviewsList from "./pages/adminreviews/ReviewsList";
import CreateReview from "./pages/adminreviews/CreateReview";
import ReviewDetails from "./pages/adminreviews/ReviewDetails";
import UpdateReview from "./pages/adminreviews/UpdateReview";
import DeleteReview from "./pages/adminreviews/DeleteReview";

import CategoriesList from "./pages/admincategories/CategoriesList";
import CreateCategory from "./pages/admincategories/CreateCategory";
import CategoryDetails from "./pages/admincategories/CategoryDetails";
import UpdateCategory from "./pages/admincategories/UpdateCategory";
import DeleteCategory from "./pages/admincategories/DeleteCategory";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accueil" element={<Home />} />

        <Route path="/accueil" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/services" element={<Services />} />
        <Route path="/avis" element={<Avis />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/deconnexion" element={<Deconnexion />} />
        <Route path="/create-review" element={<CreateReview />} />

        <Route path="/admin/" element={<AdminHome />} />
        <Route path="/admin/create-service" element={<CreateService />} />
        <Route path="/admin/services" element={<ServicesList />} />
        <Route path="/admin/services/:id" element={<ServiceDetails />} />
        <Route path="/admin/update-service/:id" element={<UpdateService />} />
        <Route path="/admin/delete-service/:id" element={<DeleteService />} />

        <Route path="/admin/create-user" element={<CreateUser />} />
        <Route path="/admin/users" element={<UsersList />} />
        <Route path="/admin/users/:id" element={<UserDetails />} />
        <Route path="/admin/update-user/:id" element={<UpdateUser />} />
        <Route path="/admin/delete-user/:id" element={<DeleteUser />} />

        <Route path="/admin/create-review/" element={<CreateReview />} />
        <Route path="/admin/reviews" element={<ReviewsList />} />
        <Route path="/admin/reviews/:id" element={<ReviewDetails />} />
        <Route path="/admin/update-review/:id" element={<UpdateReview />} />
        <Route path="/admin/delete-review/:id" element={<DeleteReview />} />

        <Route path="/admin/create-category" element={<CreateCategory />} />
        <Route path="/admin/categories" element={<CategoriesList />} />
        <Route path="/admin/categories/:id" element={<CategoryDetails />} />
        <Route path="/admin/update-category/:id" element={<UpdateCategory />} />
        <Route path="/admin/delete-category/:id" element={<DeleteCategory />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;



















































































































































































































































































