import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../layout/Header";
import { toast } from "react-toastify";

const UpdateService = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchService = async () => {
      try {
        const token = localStorage.getItem("adminToken");
        const response = await fetch(`http://localhost:3005/api/services/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          const { name, description, price } = data;
          setName(name);
          setDescription(description);
          setPrice(price);
        } else {
          throw new Error(`Erreur lors de la récupération du service : ${response.status}`);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération du service :", error);
      }
    };

    fetchService();
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const token = localStorage.getItem("adminToken");
    fetch(`http://localhost:3005/api/services/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        description: description,
        price: price,
      }),
    })
      .then((response) => {
        if (response.ok) {
          toast.success("Le service a été mis à jour avec succès");
          navigate("/admin/services");
        } else {
          throw new Error(`Erreur lors de la mise à jour du service : ${response.status}`);
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour du service :", error);
        toast.error("Une erreur s'est produite lors de la mise à jour du service");
      });
  };

  return (
    <>
      <Header />
      <div className="admin-body">
        <div className="admin-container">
          <h2>Modifier le service</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Nom du service :</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="description">Description :</label>
              <textarea
                id="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="price">Prix :</label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
                required
              />
            </div>
            <button type="submit">Mettre à jour</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateService;


