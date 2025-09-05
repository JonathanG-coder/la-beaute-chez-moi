import "./Prestation.css";
import { Link } from "react-router-dom";

function Prestation({titre, image, sousTitre, description, reverse = false, lien}) {
  return (
    <div className="prestation-container">
      <h2 dangerouslySetInnerHTML={{ __html: titre }} />
      <div className={`prestation-box ${reverse ? "prestation-box-reverse" : ""}`}>
        <div className="prestation-item prestation-item-image">
          <img src={image} alt={sousTitre} />
        </div>
        <div className="prestation-item prestation-item-text">
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
