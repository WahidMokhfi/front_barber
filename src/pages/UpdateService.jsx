import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../layout/Header";

const UpdateService = () => {
const [service, setService] = useState(null);
const { id } = useParams();

useEffect(() => {
  fetch(`http://localhost:3005/api/services/${id}`)
    .then((response) => response.json())
    .then((data) => {
      setService(data.data);
    })
    .catch((error) => {
      console.error("Erreur lors de la récupération du service :", error);
    });
}, [id]);

const handleSubmit = (event) => {
  event.preventDefault();

  const name = event.target.name.value;
  const description = event.target.description.value;
  const price = event.target.price.value;

  fetch(`http://localhost:3005/api/services/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      description: description,
      price: price,
    }),
  })
    .then((response) => {
      if (response.status === 200) {
        console.log("Service modifié");
      } else {
        console.log("Erreur");
      }
    })
    .catch((error) => {
      console.error("Erreur lors de la mise à jour du service :", error);
    });
};

return (
  <>
    <Header />
    {service ? (
      <>
        <h1>Mise à jour du service : {service.name}</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nom du service</label>
            <input type="text" name="name" defaultValue={service.name} />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              defaultValue={service.description}
            />
          </div>
          <div>
            <label htmlFor="price">Prix</label>
            <input
              type="number"
              name="price"
              defaultValue={service.price}
            />
          </div>

          <button type="submit">Mettre à jour le service</button>
        </form>
      </>
    ) : (
      <p>Chargement...</p>
    )}
  </>
);
};

export default UpdateService;

