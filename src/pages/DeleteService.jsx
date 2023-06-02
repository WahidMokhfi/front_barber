import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const DeleteService = () => {
  const [services, setServices] = useState({});
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("http://localhost:3005/api/services");
        const jsonResponse = await response.json();
        setServices(jsonResponse.data);
      } catch (error) {
        console.log("Une erreur s'est produite lors de la récupération des services :", error);
        toast.error("Une erreur s'est produite lors de la récupération des services");
      }
    };

    fetchServices();
  }, []);

  const handleDeleteService = async () => {
    let serviceToDelete = null;

    for (const key in services) {
      if (services.hasOwnProperty(key) && services[key].id === parseInt(name)) {
        serviceToDelete = services[key];
        break;
      }
    }
    confirmDelete(serviceToDelete);//, closeToast);
    // if (serviceToDelete) {
    //   toast.warn("Êtes-vous sûr de vouloir supprimer ce service ?", {
    //     position: "top-right",
    //     autoClose: false,
    //     hideProgressBar: true,
    //     closeOnClick: false,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     closeButton: false,
    //     toastId: "confirm-delete",
    //     render: ({ closeToast }) => (
    //       <div>
    //         <p>Êtes-vous sûr de vouloir supprimer ce service ?</p>
    //         <button onClick={() => confirmDelete(serviceToDelete, closeToast)}>Valider</button>
    //         <button onClick={closeToast}>Annuler</button>
    //       </div>
    //     ),
    //   });
    // } else {
    //   toast.error("Service non trouvé");
    // }
  };

  const confirmDelete = async (serviceToDelete/*, closeToast*/) => {
    try {
      await fetch(`http://localhost:3005/api/services/${serviceToDelete.id}`, {
        method: "DELETE",
      });

      const updatedServices = { ...services };
      delete updatedServices[serviceToDelete.id];
      setServices(updatedServices);

      //closeToast();
      toast.success("Le service a été supprimé avec succès");
    } catch (error) {
      console.log("Une erreur s'est produite lors de la suppression du service :", error);
      toast.error("Une erreur s'est produite lors de la suppression du service");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleDeleteService();
  };

  return (
    <>
      <Header />
      <div className="admin-body">
        <div className="admin-container">
          <h2>Supprimer un service</h2>
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
            <button type="submit">Supprimer</button>
          </form>

          <button onClick={() => navigate("/admin/")}>Retour à la page admin</button>
        </div>
      </div>
    </>
  );
};

export default DeleteService;



















































































































