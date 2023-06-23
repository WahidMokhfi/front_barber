import React, { useEffect, useState } from "react";
import Header from "../../layout/Header";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import './deletereview.css';

const DeleteReview = () => {
  const [reviews, setReviews] = useState({});
  const [id, setId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("http://localhost:3005/api/reviews");
        const jsonResponse = await response.json();
        setReviews(jsonResponse.data);
      } catch (error) {
        console.log("Une erreur s'est produite lors de la récupération des avis :", error);
        toast.error("Une erreur s'est produite lors de la récupération des avis");
      }
    };

    fetchReviews();
  }, []);

  const handleDeleteReview = async () => {
    let reviewToDelete = null;

    for (const key in reviews) {
      if (reviews.hasOwnProperty(key) && reviews[key].id === parseInt(id)) {
        reviewToDelete = reviews[key];
        break;
      }
    }

    if (reviewToDelete) {
      const confirmDelete = window.confirm("Êtes-vous sûr de vouloir supprimer cet avis ?");

      if (confirmDelete) {
        try {
          await fetch(`http://localhost:3005/api/reviews/${reviewToDelete.id}`, {
            method: "DELETE",
          });

          const updatedReviews = { ...reviews };
          delete updatedReviews[reviewToDelete.id];
          setReviews(updatedReviews);

          toast.success("L'avis a été supprimé avec succès");
        } catch (error) {
          console.log("Une erreur s'est produite lors de la suppression de l'avis :", error);
          toast.error("Une erreur s'est produite lors de la suppression de l'avis");
        }
      } else {
        toast.info("Suppression annulée");
      }
    } else {
      toast.error("Avis introuvable");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleDeleteReview();
  };

  const handleRetourClick = () => {
    navigate("/admin");
  };

  return (
    <>
      <Header />
      <div className="admin-delete-review-body">
        <div className="admin-delete-review-container">
          <h2 className="review-heading">Supprimer un avis</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="id">ID de l'avis :</label>
              <input
                type="text"
                id="id"
                value={id}
                onChange={(event) => setId(event.target.value)}
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

export default DeleteReview;

