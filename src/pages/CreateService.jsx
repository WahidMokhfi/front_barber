import { useNavigate } from "react-router-dom";
import Header from "../layout/Header";
import { useEffect } from "react";

const CreateService = () => {
const navigate = useNavigate();

useEffect(() => {
  if (!localStorage.getItem("jwt")) {
    navigate("/login");
  }
}, [navigate]);

const handleSubmit = async (event) => {
  event.preventDefault();

  const name = event.target.name.value;
  const description = event.target.description.value;
  const price = event.target.price.value;

  try {
    const response = await fetch("http://localhost:3005/api/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        description: description,
        price: price,
      }),
    });

    if (response.status === 200) {
      console.log("Service créé");
    } else {
      throw new Error(`Erreur lors de la création du service : ${response.status}`);
    }
  } catch (error) {
    console.error("Erreur lors de la création du service :", error);
  }
};

return (
  <>
    <Header />

    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nom</label>
        <input type="text" name="name" />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input type="text" name="description" />
      </div>
      <div>
        <label htmlFor="price">Prix</label>
        <input type="number" name="price" />
      </div>

      <button type="submit">Créer le service</button>
    </form>
  </>
);
};

export default CreateService;







