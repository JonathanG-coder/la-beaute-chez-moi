import logo from '../assets/Logo-blanc.png'; 
import '../header/header.css';

function Header() {
  return (
    <header>
      <img src={logo} alt="LOGO du site LA BEAUTE CHEZ MOI" />

      {/* Menu visible sur grand écran */}
      <nav className="desktop-menu">
        <a href="#">Accueil</a>
        <a href="#">A propos</a>
        <a href="#">Prestations</a>
        <a href="#">Prendre Rendez-vous</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}

export default Header
