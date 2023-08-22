// import React, { useState, useEffect, useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "./updateuser.css";

// const UpdateUser = () => {
//   const [userId, setUserId] = useState("");
//   const [username, setUsername] = useState("");
//   const navigate = useNavigate();

//   const fetchUser = useCallback(async () => {
//     try {
//       const token = localStorage.getItem("adminToken");
//       const timestamp = Date.now(); // Ajout du timestamp
//       const response = await fetch(`http://localhost:3005/api/users/${userId}?timestamp=${timestamp}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       if (response.ok) {
//         const data = await response.json();
//         const { username } = data;
//         setUsername(username);
//       } else {
//         throw new Error(`Erreur lors de la récupération de l'utilisateur : ${response.status}`);
//       }
//     } catch (error) {
//       console.error("Erreur lors de la récupération de l'utilisateur :", error);
//     }
//   }, [userId]);

//   useEffect(() => {
//     fetchUser();
//   }, [fetchUser]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const token = localStorage.getItem("adminToken");
//       const response = await fetch(`http://localhost:3005/api/users/${userId}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           username: username,
//         }),
//       });

//       if (response.ok) {
//         toast.success("L'utilisateur a été mis à jour avec succès");
//         navigate("/admin/users");
//       } else {
//         throw new Error(`Erreur lors de la mise à jour de l'utilisateur : ${response.status}`);
//       }
//     } catch (error) {
//       console.error("Erreur lors de la mise à jour de l'utilisateur :", error);
//       toast.error("Une erreur s'est produite lors de la mise à jour de l'utilisateur");
//     }
//   };

//   const handleRetourClick = () => {
//     navigate("/admin/");
//   };

//   return (
//     <div className="admin-update-user-body">
//       <div className="admin-update-user-container">
//         <h2>Modifier l'utilisateur</h2>
//         <form onSubmit={handleSubmit}>
//           <label>ID de l'utilisateur</label>
//           <input
//             type="text"
//             value={userId}
//             onChange={(e) => setUserId(e.target.value)}
//             placeholder="ID de l'utilisateur"
//           />
//           <label>Nom d'utilisateur</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="Nom d'utilisateur"
//           />
//           <button type="submit" className="update-button">Modifier</button>
//           <button className="retour-button" onClick={handleRetourClick}>
//             Retour
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UpdateUser;















