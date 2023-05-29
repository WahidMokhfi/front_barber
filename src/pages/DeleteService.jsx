import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DeleteService = ({ serviceId, token }) => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch(`/api/services/${serviceId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Échec de la suppression du service');
        }
      })
      .then(data => {
        console.log('Service supprimé avec succès', data);
        setMessage('Le service a été supprimé avec succès');
        navigate('/admin/services'); // Naviguer vers la page "/admin/services"
      })
      .catch(error => {
        console.error(error);
        setMessage("Une erreur s'est produite lors de la suppression du service");
      });
  };

  return (
    <div>
      <h1>Supprimer le service</h1>
      {message && <p>{message}</p>}
      <button onClick={handleDelete}>Supprimer</button>
    </div>
  );
};

export default DeleteService;













