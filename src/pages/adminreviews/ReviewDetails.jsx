import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./reviewslist.css";

const ReviewDetails = () => {
  const { id } = useParams();
  const [review, setReview] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    const fetchReviewDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3005/api/reviews/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setReview(data);
        } else {
          throw new Error(
            `Erreur lors de la récupération des détails de l'avis : ${response.status}`
          );
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des détails de l'avis :", error);
        toast.error(
          "Une erreur s'est produite lors de la récupération des détails de l'avis"
        );
      }
    };

    fetchReviewDetails();
  }, [id]);

  if (!review) {
    return <div>Loading...</div>;
  }

  return (
    <div className="reviews-list-prefix-body">
      <h2>Détails de l'avis</h2>
      <div>
        <h3>Avis ID: {review.id}</h3>
        <p>Contenu: {review.content}</p>
        <p>Service ID: {review.service_id}</p>
        <p>Nom du Service: {review.service_name}</p>
        <p>Évaluation: {review.rating}</p>
        <p>Utilisateur: {review.username}</p>
      </div>
    </div>
  );
};

export default ReviewDetails;



