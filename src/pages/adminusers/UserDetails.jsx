import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../layout/Header";
import { toast } from "react-toastify";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const adminToken = localStorage.getItem("adminToken");
        if (!adminToken) {
          navigate("/connexion");
          toast.error(
            "Veuillez vous connecter en tant qu'administrateur pour accéder à cette page"
          );
          return;
        }

        const response = await fetch(`http://localhost:3005/api/users/${id}`, {
          headers: {
            Authorization: `Bearer ${adminToken}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          throw new Error(
            `Erreur lors de la récupération des détails de l'utilisateur : ${response.status}`
          );
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des détails de l'utilisateur :",
          error
        );
        toast.error(
          "Une erreur s'est produite lors de la récupération des détails de l'utilisateur"
        );
      }
    };

    fetchUserDetails();
  }, [id, navigate]);

  return (
    <>
      <Header />
      <div className="user-details">
        <h2>Détails de l'utilisateur</h2>
        <div>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          {user.password && <p>Mot de passe : *********</p>}
          <p>
            Roles :{" "}
            {user.roles &&
              user.roles.map((role, index) => (
                <span key={index}>{role}</span>
              ))}
          </p>
          <p>Numéro de téléphone : {user.phone_number}</p>
        </div>
      </div>
    </>
  );
};

export default UserDetails;



