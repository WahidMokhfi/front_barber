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
import Accueil from "./pages/accueil/Accueil";

import ServicesList from "./pages/adminserv/ServicesList";
import CreateService from "./pages/adminserv/CreateService";
import ServiceDetails from "./pages/adminserv/ServiceDetails";
import UpdateService from "./pages/adminserv/UpdateService";
import DeleteService from "./pages/adminserv/DeleteService";

import UsersList from "./pages/adminuse/UsersList";
import CreateUser from "./pages/adminuse/CreateUser";
import UserDetails from "./pages/adminuse/UserDetails";
import UpdateUser from "./pages/adminuse/UpdateUser";
import DeleteUser from "./pages/adminuse/DeleteUser";

import ReviewsList from "./pages/adminrev/ReviewsList";
import CreateReview from "./pages/adminrev/CreateReview";
import ReviewDetails from "./pages/adminrev/ReviewDetails";
import UpdateReview from "./pages/adminrev/UpdateReview";
import DeleteReview from "./pages/adminrev/DeleteReview";

import CategoriesList from "./pages/admincat/CategoriesList";
import CreateCategory from "./pages/admincat/CreateCategory";
import CategoryDetails from "./pages/admincat/CategoryDetails";
import UpdateCategory from "./pages/admincat/UpdateCategory";
import DeleteCategory from "./pages/admincat/DeleteCategory";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accueil" element={<Home />} />

        <Route path="/accueil" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/serv" element={<Services />} />
        <Route path="/avis" element={<Avis />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/deconnexion" element={<Deconnexion />} />
        <Route path="/create-review/:service_id" element={<CreateReview />} />

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

        <Route path="/admin/create-review/:service_id" element={<CreateReview />} />
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



















































































































































































































































































