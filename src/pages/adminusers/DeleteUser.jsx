import React, { useEffect, useState } from "react";
import Header from "../../layout/Header";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import './deleteuser.css';

const DeleteUser = () => {
  const [users, setUsers] = useState({});
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3005/api/users");
        const jsonResponse = await response.json();
        setUsers(jsonResponse.data);
      } catch (error) {
        console.log("Une erreur s'est produite lors de la récupération des utilisateurs :", error);
        toast.error("Une erreur s'est produite lors de la récupération des utilisateurs");
      }
    };

    fetchUsers();
  }, []);

  const handleDeleteUser = async () => {
    let userToDelete = null;

    for (const key in users) {
      if (users.hasOwnProperty(key) && users[key].id === parseInt(userId)) {
        userToDelete = users[key];
        break;
      }
    }

    if (userToDelete) {
      const confirmDelete = window.confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?");

      if (confirmDelete) {
        try {
          await fetch(`http://localhost:3005/api/users/${userToDelete.id}`, {
            method: "DELETE",
          });

          const updatedUsers = { ...users };
          delete updatedUsers[userToDelete.id];
          setUsers(updatedUsers);

          toast.success("L'utilisateur a été supprimé avec succès");
        } catch (error) {
          console.log("Une erreur s'est produite lors de la suppression de l'utilisateur :", error);
          toast.error("Une erreur s'est produite lors de la suppression de l'utilisateur");
        }
      } else {
        toast.info("Suppression annulée");
      }
    } else {
      toast.error("Utilisateur introuvable");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleDeleteUser();
  };

  const handleRetourClick = () => {
    navigate("/admin");
  };

  return (
    <>
      <Header />
      <div className="admin-delete-user-body">
        <div className="admin-delete-user-container">
          <h2 className="user-heading">Supprimer un utilisateur</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="userId">ID de l'utilisateur :</label>
              <input
                type="text"
                id="userId"
                value={userId}
                onChange={(event) => setUserId(event.target.value)}
                required
              />
            </div>
            <button type="submit" className="delete-button">Supprimer</button>
          </form>

          <button className="retour-button" onClick={handleRetourClick}>
            Retour
          </button>
        </div>
      </div>
    </>
  );
};

export default DeleteUser;

