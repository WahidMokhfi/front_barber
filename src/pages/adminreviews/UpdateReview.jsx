import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateReview = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [review, setReview] = useState({
    content: "",
    rating: 0,
  });

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await fetch(`http://localhost:3005/api/reviews/${id}`);
        if (response.ok) {
          const data = await response.json();
          setReview(data);
        } else {
          throw new Error(
            `Erreur lors de la récupération de l'avis : ${response.status}`
          );
        }
      } catch (error) {
        console.error("Erreur lors de la récupération de l'avis :", error);
        toast.error("Une erreur s'est produite lors de la récupération de l'avis");
      }
    };

    fetchReview();
  }, [id]);

  const handleChange = (e) => {
    setReview((prevReview) => ({
      ...prevReview,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3005/api/reviews/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
      });

      if (response.ok) {
        toast.success("L'avis a été mis à jour avec succès");
        navigate("/admin/reviews"); // Rediriger vers la liste des avis après la mise à jour
      } else {
        throw new Error(`Erreur lors de la mise à jour de l'avis : ${response.status}`);
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'avis :", error);
      toast.error("Une erreur s'est produite lors de la mise à jour de l'avis");
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
            name="content"
            value={review.content}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="rating">Évaluation :</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={review.rating}
            onChange={handleChange}
            min="1"
            max="5"
            required
          />
        </div>
        <button type="submit">Mettre à jour</button>
      </form>
    </div>
  );
};

export default UpdateReview;
