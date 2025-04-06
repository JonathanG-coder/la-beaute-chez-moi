// Header.js
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/Logo-blanc.png";
import "../header/header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <img src={logo} alt="LOGO du site LA BEAUTE CHEZ MOI" />
      
      <nav className="header-menu">
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/prestations">Prestations</Link></li>
          <li><Link to="/prendre-rendez-vous">Prendre Rendez-vous</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <button className="burger-menu" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>
      
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Accueil</Link></li>
          <li><Link to="/prestations" onClick={() => setIsOpen(false)}>Prestations</Link></li>
          <li><Link to="/prendre-rendez-vous" onClick={() => setIsOpen(false)}>Prendre Rendez-vous</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;