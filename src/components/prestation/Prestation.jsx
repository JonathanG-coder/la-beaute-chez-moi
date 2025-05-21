import "./Prestation.css";
import { Link } from "react-router-dom";

function Prestation({titre, image, sousTitre, description, reverse = false, lien}) {
  return (
    <div className="prestations-container">
      <h2 dangerouslySetInnerHTML={{ __html: titre }} />
      <div className={`prestations-box ${reverse ? "reverse" : ""}`}>
        <div className="prestations-item">
          <img src={image} alt={sousTitre} />
        </div>
        <div className="prestations-item">
          <h3>{sousTitre}</h3>
          <p>{description}</p>
          {lien && (
          <Link to={lien} className="prestation-btn">
            En savoir +
          </Link>
          )}
        </div>
        
      </div>
    </div>
  );
}

export default Prestation;
