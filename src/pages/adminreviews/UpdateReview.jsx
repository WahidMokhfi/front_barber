import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateReview() {
  const { reviewId } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [rating, setRating] = useState('1');
  const [userId, setUserId] = useState('');
  const [serviceId, setServiceId] = useState('');
  const [service_name, setServiceName] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await fetch(`http://localhost:3005/api/reviews/${reviewId}`);
        const data = await response.json();
        setContent(data.content);
        setRating(data.rating);
        setServiceId(data.service_id);
        setUserId(data.user_id);
        setServiceName(data.service_name);
        setUsername(data.username);
      } catch (error) {
        console.error('Erreur lors de la récupération de l\'avis :', error);
      }
    };

    fetchReview();
  }, [reviewId]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem('adminToken');
    try {
      const response = await fetch(`http://localhost:3005/api/reviews/${reviewId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          content: content,
          rating: rating,
          service_id: serviceId,
          user_id: userId,
          service_name: service_name,
          username: username,
        }),
      });

      if (response.ok) {
        navigate('/admin/reviews');
      } else {
        console.error('Erreur lors de la mise à jour de l\'avis :', response.status);
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour de l\'avis :', error);
    }
  };

  return (
    <div>
      <h2>Modifier l'avis</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="content">Contenu :</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="rating">Évaluation :</label>
          <input
            type="number"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="serviceId">ID du service :</label>
          <input
            type="text"
            id="serviceId"
            value={serviceId}
            onChange={(e) => setServiceId(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="userId">ID de l'utilisateur :</label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="service_name">Nom du service :</label>
          <input
            type="text"
            id="service_name"
            value={service_name}
            onChange={(e) => setServiceName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="username">Nom d'utilisateur :</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <button type="submit">Mettre à jour</button>
      </form>
    </div>
  );
}

export default UpdateReview;

