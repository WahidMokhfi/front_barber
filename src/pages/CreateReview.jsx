import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../layout/Header";
import { toast } from "react-toastify";
import "./createuser.css";
import StarRatings from "react-star-ratings";

const CreateReview = () => {
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    const userId = localStorage.getItem("userId");
    if (!userToken || !userId) {
      navigate("/connexion");
      toast.error("Veuillez vous connecter pour accéder à cette page");
    }
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userId = localStorage.getItem("userId");
      console.log("userId:", userId); // Ajout du console.log
      if (!userId) {
        throw new Error("Impossible de récupérer l'ID de l'utilisateur");
      }

      // Conversion de la valeur de rating en chiffre entre 1 et 5
      const convertedRating = Math.ceil(rating);

      const response = await fetch("http://localhost:3005/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
        body: JSON.stringify({
          content: content,
          rating: convertedRating,
          userId: userId,
        }),
      });

      if (response.ok) {
        toast.success("La review a été créée avec succès");
        navigate("/reviews");
      } else {
        throw new Error(
          `Erreur lors de la création de la review : ${response.status}`
        );
      }
    } catch (error) {
      console.error("Erreur lors de la création de la review :", error);
      toast.error("Une erreur s'est produite lors de la création de la review");
    }
  };

  const handleRetourClick = () => {
    navigate("/avis");
  };

  return (
    <>
      <Header />
      <div className="admin-create-user-body">
        <div className="admin-create-user-container">
          <h2 className="title">Créer une review</h2>
          <form onSubmit={handleSubmit}>
            <div className="admin-create-user-field">
              <label htmlFor="content">Contenu de l'avis :</label>
              <textarea
                id="content"
                value={content}
                onChange={(event) => setContent(event.target.value)}
                required
              />
            </div>
            <div className="admin-create-user-field">
              <label htmlFor="rating">Note/rating :</label>
              <StarRatings
                rating={rating}
                starRatedColor="#FFD700"
                starEmptyColor="#E4E5E9"
                starHoverColor="#FFD700"
                starDimension="30px"
                starSpacing="5px"
                changeRating={setRating}
              />
            </div>
            <button type="submit" className="create-button">
              Créer
            </button>
            <button className="retour-button" onClick={handleRetourClick}>
              Retour
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateReview;








