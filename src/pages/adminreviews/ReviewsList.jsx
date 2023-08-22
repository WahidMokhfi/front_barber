import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../layout/Header';
import { toast } from 'react-toastify';
import './reviewslist.css';

function ReviewsList() {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);
  const [selectedReview, setSelectedReview] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');

    const fetchReviews = async () => {
      try {
        const response = await fetch('http://localhost:3005/api/reviews', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setReviews(data.data);
        } else {
          throw new Error(`Erreur lors de la récupération des avis : ${response.status}`);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des avis :', error);
        toast.error('Une erreur s\'est produite lors de la récupération des avis');
      }
    };

    fetchReviews();
  }, []);

  const handleDeleteReview = async (reviewId, username) => {
    const token = localStorage.getItem('adminToken');

    if (window.confirm(`Êtes-vous sûr de vouloir supprimer l'avis de ${username} ?`)) {
      try {
        const response = await fetch(`http://localhost:3005/api/reviews/${reviewId}`, {
          method: 'DELETE',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const updatedReviews = reviews.filter(review => review.id !== reviewId);
          setReviews(updatedReviews);

          toast.success(`L'avis de "${username}" a été supprimé avec succès.`);
        } else {
          throw new Error(`Erreur lors de la suppression de l'avis : ${response.status}`);
        }
      } catch (error) {
        console.error('Erreur lors de la suppression de l\'avis :', error);
        toast.error('Une erreur s\'est produite lors de la suppression de l\'avis.');
      }
    }
  };

  const handleReviewClick = (review) => {
    setSelectedReview(review === selectedReview ? null : review);
  };

  const handleRetourAccueil = () => {
    navigate('/admin');
  };

  return (
    <div className="reviews-list-prefix-body">
      <Header />
      <section className="reviews-list" id="reviews-list">
        <h2 className="heading">Liste des avis</h2>
        <div className="box-container">
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div className="box" key={index}>
                <div className="quote-container">
                  <img src="img/icon-avis.png" alt="" className="quote" />
                </div>
                <p>{review.content}</p>
                <img src={review.User.avatar} className="user" alt="" />
                <h3>{review.User.username}</h3>
                <div className="stars">
                  {Array.from({ length: review.rating }, (_, i) => (
                    <i className="fas fa-star" key={i}></i>
                  ))}
                  {review.rating % 1 !== 0 && (
                    <i className="fas fa-star-half-alt" key="half"></i>
                  )}
                </div>
                <button
                  onClick={() => handleReviewClick(review)}
                  className="reviews-list-action-button reviews-list--button"
                >
                  <span className="reviews-list-button-icon">🖋️</span>Détails
                </button>
                {selectedReview === review && (
                  <div className="reviews-list-details">
                    <p>ID: {review.id}</p>
                    <p>Utilisateur ID: {review.user_id}</p>
                    <p>Service ID: {review.service_id}</p>
                    <p>Évaluation: {review.rating}</p>
                    <p>Utilisateur: {review.User.username}</p>
                  </div>
                )}
                <button
                  onClick={() => handleDeleteReview(review.id, review.User.username)}
                  className="reviews-list-action-button reviews-list-delete-button"
                >
                  <span className="reviews-list-button-icon">🗑️</span>Supprimer
                </button>
              </div>
            ))
          ) : (
            <div>Aucun avis disponible</div>
          )}
        </div>

        <div className="text-align:center">
          <button className="btn btn-return" onClick={handleRetourAccueil}>
            Retour
          </button>
        </div>
      </section>
    </div>
  );
}

export default ReviewsList;






























