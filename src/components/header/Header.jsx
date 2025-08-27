import { useState, useEffect, useRef } from "react";
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
  const menuRef = useRef(null);

  const toggleMenu = () => setOpen(!open);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
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

  // Gestion du scroll pour enlever le background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
      <nav ref={menuRef} className={`nav-menu ${open ? "active" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/manucure" onClick={() => setOpen(false)}>Manucure</Link>
        <Link to="/massages" onClick={() => setOpen(false)}>Massage</Link>
        <Link to="/regard" onClick={() => setOpen(false)}>Regard</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
      </nav>
    </header>
  );
}
