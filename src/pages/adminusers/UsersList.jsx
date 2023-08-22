import React, { useEffect, useState } from "react";
import Header from "../../layout/Header";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "./userslist.css";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem('adminToken');

      try {
        const response = await fetch("http://localhost:3005/api/users", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setUsers(data.data);
        } else {
          throw new Error(`Erreur lors de la récupération des utilisateurs : ${response.status}`);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des utilisateurs :", error);
        toast.error("Une erreur s'est produite lors de la récupération des utilisateurs");
      }
    };

    fetchUsers();
  }, []);

  const handleRetourClick = () => {
    navigate("/admin");
  };

  const handleUserClick = (user) => {
    if (selectedUser && selectedUser.id === user.id) {
      setSelectedUser(null);
    } else {
      setSelectedUser(user);
    }
  };

  const handleDeleteUser = async (userId) => {
    const token = localStorage.getItem('adminToken');

    try {
      const response = await fetch(`http://localhost:3005/api/users/${userId}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const updatedUsers = users.filter(user => user.id !== userId);
        setUsers(updatedUsers);

        const deletedUser = users.find(user => user.id === userId);
        const deletedUserName = deletedUser ? deletedUser.username : '';

        toast.success(`L'utilisateur "${deletedUserName}" a été supprimé avec succès.`);
      } else {
        throw new Error(`Erreur lors de la suppression de l'utilisateur : ${response.status}`);
      }
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'utilisateur :', error);
      toast.error('Une erreur s\'est produite lors de la suppression de l\'utilisateur.');
    }
  };

  const confirmDeleteUser = (userId) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      handleDeleteUser(userId);
    }
  };

  return (
    <>
      <Header className="users-list-header-prefix" />
      <div className="users-list-prefix-body">
        <div className="users-list-container users-list-prefix">
          <h2 className="users-list-title">Liste des utilisateurs</h2>
          <div className="users-list-glass-container">
            <ul className="users-list-ul">
              {users.map((user) => (
                <li key={user.id} className="users-list-item">
                  <button
                    className={`users-list-user-link ${
                      selectedUser === user ? "active" : ""
                    }`}
                    onClick={() => handleUserClick(user)}
                  >
                    {user.username}
                  </button>
                  {selectedUser === user && (
                    <div className="users-list-selected-user">
                      <h3>Détails de l'utilisateur</h3>
                      <p className="users-list-user-detail">ID : {user.id}</p>
                      <p className="users-list-user-detail">Nom d'utilisateur : {user.username}</p>
                      <p className="users-list-user-detail">Mot de passe : *********</p>
                      <p className="users-list-user-detail">Rôle : {user.roles}</p>
                      <p className="users-list-user-detail">Date de création : {user.created}</p>
                      <p className="users-list-user-detail">Email : {user.email}</p>
                      <p className="users-list-user-detail">Numéro de téléphone : {user.phone_number}</p>
                    </div>
                  )}

                  <Link to={`/admin/update-user/${user.id}`} className="users-list-action-button users-list-update-button">
                    <span className="users-list-button-icon">🖋️</span>Modifier
                  </Link>
                  <button onClick={() => confirmDeleteUser(user.id)} className="users-list-action-button users-list-delete-button">
                    <span className="users-list-button-icon">🗑️</span>Supprimer
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="users-list-button-container">
            <button className="users-list-retour-button" onClick={handleRetourClick}>
              Retour
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersList;


















