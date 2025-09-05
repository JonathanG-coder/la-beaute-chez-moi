import "./Affiche.css";
import { useNavigate } from "react-router";

function Affiche({ titre, sousTitre, image, description, showButton = true }) {
  const navigate = useNavigate();

  return (
    <div className="affiche-container">
      <div className="affiche-header">
        <div className="affiche-header-titre">
          <h1 dangerouslySetInnerHTML={{ __html: titre }} />
        </div>
        <div className="affiche-header-img">
          <img src={image} alt={sousTitre} />
        </div>
      </div>
      <div className="affiche-explication">
        <h2>{sousTitre}</h2>
        <p>{description.accroche}</p>
        <p>{description.details}</p>
        {showButton && (
          <button
            className="affiche-button"
            onClick={() => navigate("/contact")}
          >
            Prendre Rendez-vous
          </button>
        )}
      </div>
    </div>
  );
}

export default Affiche;
