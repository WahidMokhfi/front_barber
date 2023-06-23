import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../layout/Header";
import { toast } from "react-toastify";
import "./createreview.css";
import StarRatings from "react-star-ratings";

const CreateReview = () => {
  const [comment, setComment] = useState("");
  const [note, setNote] = useState(1);
  const navigate = useNavigate();
  const { user_id } = useParams();

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    if (!userToken) {
      navigate("/connexion");
      toast.error("Veuillez vous connecter pour accéder à cette page");
    }
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userToken = localStorage.getItem("userToken");
      if (!userToken) {
        throw new Error("Impossible de récupérer le jeton d'utilisateur");
      }

      const convertedNote = Math.ceil(note);

      const response = await fetch("http://localhost:3005/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify({
          comment: comment,
          note: convertedNote,
          created_at: new Date(),
          user_id: user_id,
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
              <label htmlFor="comment">Commentaire :</label>
              <textarea
                id="comment"
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                required
              />
            </div>
            <div className="admin-create-user-field">
              <label htmlFor="note">Note :</label>
              <StarRatings
                rating={note}
                starRatedColor="#FFD700"
                starEmptyColor="#E4E5E9"
                starHoverColor="#FFD700"
                starDimension="30px"
                starSpacing="5px"
                changeRating={setNote}
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


















