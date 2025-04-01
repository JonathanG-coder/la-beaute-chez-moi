import logo from "../../assets/Logo-blanc.png";
import '../header/header.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <img src={logo} alt="LOGO du site LA BEAUTE CHEZ MOI" />

      {/* Menu visible sur grand écran */}
      
      <nav className="desktop-menu">
        <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/about">À Propos</Link></li>
        <li><Link to="/prestations">Prestations</Link></li>
        <li><Link to="/prendre-rendez-vous">Prendre Rendez-vous</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      </nav>
    </header>
  );
}

export default Header
