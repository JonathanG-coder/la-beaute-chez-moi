import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp, Moon, Sun } from "lucide-react";
import logo from "../../assets/logo/Logo-blanc.png";
import { useDarkMode } from "../../components/DarkMode/DarkModeContext";
import "../header/header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdownMobile, setShowDropdownMobile] = useState(false);

  // Utilisation du hook useDarkMode pour obtenir l'état du mode sombre et la fonction de bascule
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  // Applique la classe 'dark' sur le body en fonction du mode sombre
  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <header>
      <Link to="/">
        <img src={logo} alt="LOGO du site LA BEAUTE CHEZ MOI" />
      </Link>

      <nav className="header-menu">
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <div className="dropdown">
            <button className="dropbtn">
              Prestations <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <a href="/manucure">Onglerie</a>
              <a href="/regard">Beauté du Regard</a>
              <a href="/massage">Massages</a>
            </div>
          </div>
          <li>
            <Link to="/prendre-rendez-vous">Prendre Rendez-vous</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <button
              onClick={toggleDarkMode}
              className={`dark-mode-toggle ${isDarkMode ? "dark" : "light"}`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </li>
        </ul>
      </nav>

      <button className="burger-menu" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Accueil
            </Link>
          </li>
          <li
            onClick={() => setShowDropdownMobile(!showDropdownMobile)}
            style={{ cursor: "pointer" }}
          >
            Prestations{" "}
            {showDropdownMobile ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
            {showDropdownMobile && (
              <ul className="mobile-dropdown">
                <li>
                  <Link to="/manucure" onClick={() => setIsOpen(false)}>
                    Onglerie
                  </Link>
                </li>
                <li>
                  <Link to="/regard" onClick={() => setIsOpen(false)}>
                    Beauté du Regard
                  </Link>
                </li>
                <li>
                  <Link to="/massage" onClick={() => setIsOpen(false)}>
                    Massages
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/prendre-rendez-vous" onClick={() => setIsOpen(false)}>
              Prendre Rendez-vous
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <button
              onClick={toggleDarkMode}
              className={`dark-mode-toggle ${isDarkMode ? "dark" : "light"}`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
