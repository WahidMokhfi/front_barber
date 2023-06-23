import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./reviewslist.css";

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    const fetchReviews = async () => {
      try {
        const response = await fetch("http://localhost:3005/api/reviews", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setReviews(data);
        } else {
          throw new Error(
            `Erreur lors de la récupération des avis : ${response.status}`
          );
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des avis :", error);
        toast.error(
          "Une erreur s'est produite lors de la récupération des avis"
        );
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="reviews-list-prefix-body"> {/* Ajout de la classe pour le style */}
      <h2>Liste des avis</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h3>Avis ID: {review.id}</h3>
            <p>Contenu: {review.content}</p>
            <p>Utilisateur ID: {review.user_id}</p>
            <p>Service ID: {review.service_id}</p>
            <p>Évaluation: {review.rating}</p>
            <p>Utilisateur: {review.username}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewsList;

