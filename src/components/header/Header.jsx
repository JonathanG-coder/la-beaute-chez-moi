import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo/logo-blanc.png"; 

export default function Header() {
  
  // Variable d'état ---
  // Le dark mode est activé par défaut (true)
  const [darkMode, setDarkMode] = useState(() => {
  const savedTheme = localStorage.getItem("theme");
  return savedTheme === "light" ? false : true;
});
  const [open, setOpen] = useState(false);

  // Fonction pour inverser ---
  const toggleMenu = () => setOpen(!open);
  const toggleDarkMode = () => {
  const newMode = !darkMode;
  setDarkMode(newMode);
  localStorage.setItem("theme", newMode ? "dark" : "light");
};

  // A chaque fois que DarkMode change, utilisaion de useEffect
  useEffect(() => {     //() => Fonction fléchée, callback
    // Fonction pour changer le thème
    if (darkMode) {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
  } else {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
  }
  }, [darkMode]); //  = Tableau de dépendance qui surveille la liste des variables. CEtte fonction s'exécute à chaque fois que darkMode change

  return (
    <header className={`header ${darkMode ? "dark" : "light"}`}>
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <div className="header-actions">
        <div className="toggle-darkmode" onClick={toggleDarkMode}>
          <i className={darkMode ? "fas fa-sun" : "fas fa-moon"}></i>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={open ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
      <nav className={`nav-menu ${open ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/manucure">Manucure</Link>
        <Link to="/massages">Massage</Link>
        <Link to="/regard">Regard</Link>
        {/* <Link to="/contact">contact</Link>
        <Link to="/resume">Resume</Link> */}
        
      </nav>
    </header>
  );
}
