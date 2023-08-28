import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../layout/Header";
import { toast } from "react-toastify";
import StarRatings from "react-star-ratings";

const CreateReview = () => {
  const [comment, setComment] = useState("");
  const [note, setNote] = useState(1);
  const [selectedServiceId, setSelectedServiceId] = useState("");
  const [selectedServiceName, setSelectedServiceName] = useState("");
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  const userToken = localStorage.getItem("userToken");
  const adminToken = localStorage.getItem("adminToken");

  const [serviceList, setServiceList] = useState([]);

  const fetchServices = useCallback(async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch("http://localhost:3005/api/services", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setServiceList(data.data);
      } else {
        throw new Error(`Erreur lors de la récupération des services : ${response.status}`);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des services :", error);
      toast.error("Une erreur s'est produite lors de la récupération des services");
    }
  }, []);

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!userToken && !adminToken) {
      navigate("/connexion");
      toast.error("Veuillez vous connecter pour accéder à cette page");
      return;
    }

    try {
      const convertedNote = Math.ceil(note);

      const response = await fetch("http://localhost:3005/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken || adminToken}`,
        },
        body: JSON.stringify({
          content: comment,
          user_id: userId,
          rating: convertedNote,
          service_id: selectedServiceId,
          service_name: selectedServiceName,
          username: localStorage.getItem("userName"), // Utilisation de getItem ici
        }),
      });

      if (response.ok) {
        toast.success("La review a été créée avec succès");
        navigate("/avis");
      } else {
        throw new Error(`Erreur lors de la création de la review : ${response.status}`);
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
            <div className="admin-create-user-field">
              <label htmlFor="service">Service :</label>
              <select
                id="service"
                required
                value={selectedServiceName}
                onChange={(event) => {
                  setSelectedServiceName(event.target.value);
                  setSelectedServiceId(event.target.selectedOptions[0].getAttribute('data-id'));
                }}
              >
                <option value="" disabled>Sélectionnez un service</option>
                {serviceList.map(service => (
                  <option key={service.id} value={service.name} data-id={service.id}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="admin-create-user-field">
              <label htmlFor="username">Nom d'utilisateur :</label>
              <input
                type="text"
                id="username"
                value={localStorage.getItem("userName") || ""}
                readOnly
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














































