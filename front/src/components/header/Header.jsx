import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "light" ? false : true;
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header-container ${darkMode ? "header-dark" : "header-light"} ${isScrolled ? "header-transparent" : ""}`}>
      <Link to="/" className="header-logo-link">
        <img src="https://res.cloudinary.com/djbvkngqe/image/upload/v1756727741/logo_qtzisz.png" alt="Logo" className="header-logo" />
      </Link>

      <div className="header-actions-container">
        <div className="header-toggle-darkmode" onClick={toggleDarkMode}>
          <i className={darkMode ? "fas fa-sun" : "fas fa-moon"}></i>
        </div>
        <div className="header-menu-icon" onClick={toggleMenu}>
          <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>

      <nav ref={menuRef} className={`header-nav ${menuOpen ? "header-nav-active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/manucure" onClick={() => setMenuOpen(false)}>Manucure</Link>
        <Link to="/massages" onClick={() => setMenuOpen(false)}>Massage</Link>
        <Link to="/regard" onClick={() => setMenuOpen(false)}>Regard</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </nav>
    </header>
  );
}
