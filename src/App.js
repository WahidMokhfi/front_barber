import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Accueil from "./pages/accueil/Accueil"
import Apropos from "./pages/apropos/Apropos"
import Services from "./pages/serv/Services"
import Tarifs from "./pages/tarifs/Tarifs"
import Avis from "./pages/avis/Avis"
import Contact from "./pages/contact/Contact"
import Connexion from "./pages/connexion/Connexion"
import "./App.css"


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accueil" element={<Accueil />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="/serv" element={<Services />} />
            <Route path="/tarifs" element={<Tarifs />} />
            <Route path="/avis" element={<Avis />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/connexion" element={<Connexion />} />
        </Routes>
        {/* <Link to="/connexion">Se connecter</Link> */}
    </BrowserRouter>
  );
}

export default App;
