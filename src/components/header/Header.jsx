import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo/logo.png"; 

export default function Header() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "light" ? false : true;
  });

  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); 

  const toggleMenu = () => setOpen(!open);
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  // Changement du thème (dark/light)
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  // Détection du scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${darkMode ? "dark" : "light"} ${isScrolled ? "transparent" : ""}`}>
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
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
