import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./userslist.css";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3005/api/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setUsers(data.data);
        } else {
          throw new Error(
            `Erreur lors de la récupération des utilisateurs : ${response.status}`
          );
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des utilisateurs :", error);
        toast.error(
          "Une erreur s'est produite lors de la récupération des utilisateurs"
        );
      }
    };

    fetchUsers();
  }, []);

  const handleRetourClick = () => {
    navigate("/admin");
  };

  const handleUserClick = (user) => {
    if (selectedUser && selectedUser.id === user.id) {
      setSelectedUser(null); // Fermer le détail si le même utilisateur est cliqué à nouveau
    } else {
      setSelectedUser(user);
    }
  };

  return (
    <>
      <Header className="header-prefix" />
      <div className="prefix-body">
        <div className="users-list-container users-prefix">
          <h2 className="users-list-title">Liste des utilisateurs</h2>
          <div className="glass-container">
            <ul className="users-list-ul">
              {users.map((user) => (
                <li key={user.id} className="users-list-item">
                  <button
                    className={`user-link ${
                      selectedUser === user ? "active" : ""
                    }`}
                    onClick={() => handleUserClick(user)}
                  >
                    {user.username}
                  </button>
                  {selectedUser === user && (
                    <div className="selected-user">
                      <h3>Détails de l'utilisateur</h3>
                      <p className="user-detail">ID : {user.id}</p>
                      <p className="user-detail">Nom d'utilisateur : {user.username}</p>
                      {/* Ajoutez d'autres détails d'utilisateur ici */}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="button-container">
            <button className="retour-button" onClick={handleRetourClick}>
              Retour
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersList;
