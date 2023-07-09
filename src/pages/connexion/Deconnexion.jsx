import React, { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../layout/Header";

const Deconnexion = () => {
  const navigate = useNavigate();

  const handleLogout = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:3005/api/users/logout", {
        method: "GET",
        credentials: "include",
      });

      if (response.ok) {
        const responseData = await response.json();
        const { username } = responseData;
        toast.info(`Au revoir, ${username} ! À bientôt !`);
        localStorage.removeItem("adminToken");
        localStorage.removeItem("userToken");
        navigate("/"); 
      } else {
        toast.error("Une erreur s'est produite lors de la déconnexion. Veuillez réessayer !");
      }
    } catch (error) {
      console.log("Une erreur s'est produite lors de la déconnexion :", error);
    }
  }, [navigate]);

  useEffect(() => {
    handleLogout();
  }, [handleLogout]);

  return (
    <>
      <Header />
      <ToastContainer className="toast-custom" />
      <div className="deconnexion-container">
        <h2>Déconnexion</h2>
        <p>Veuillez patienter pendant que vous êtes déconnecté...</p>
        <button className="form-custom button[type='submit']" onClick={handleLogout}>
          Déconnexion
        </button>
      </div>
    </>
  );
};

export default Deconnexion;















































































