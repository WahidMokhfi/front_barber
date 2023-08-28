import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './createuser.css';

const CreateUser = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [roles, setRoles] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhoneNumber] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Selected role:", roles); // Debugging line

    try {
      const newUser = {
        username,
        password,
        roles: roles,
        email,
        phone_number: phone_number,
      };

      const token = localStorage.getItem('adminToken');

      const response = await fetch('http://localhost:3005/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        const data = await response.json();
        const createdUserType = data.data.roles.includes('admin') ? 'Administrateur' : 'Utilisateur';
        const message = `${createdUserType} ${data.data.username} a bien été créé`;
        toast.success(message);
        navigate('/admin/users');
      } else {
        throw new Error('Erreur lors de la création de l\'utilisateur.');
      }
      
    } catch (error) {
      console.error('Erreur lors de la création de l\'utilisateur :', error);
      toast.error('Erreur lors de la création de l\'utilisateur.');
    }
  };

  const handleRetourClick = () => {
    navigate('/admin/');
  };

  return (
    <div className="admin-create-user-body">
      <div className="admin-create-user-container">
        <h2>Créer un nouvel utilisateur</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nom d'utilisateur :</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div>
            <label>Mot de passe :</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="new-password" required />
          </div>
          <div>
            <select value={roles} onChange={(e) => setRoles(e.target.value)} required>
              <option value="user">Utilisateur</option>
              <option value="admin">admin</option>
            </select>
          </div>
          <div>
            <label>Email :</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label>Numéro de téléphone :</label>
            <input type="text" value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)} required />
          </div>
          <button type="submit" className="create-button">Créer</button>
          <button className="retour-button" onClick={handleRetourClick}>
            Retour
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;






































































































































































