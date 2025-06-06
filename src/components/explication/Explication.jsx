import "./Explication.css";
import { Link } from "react-router-dom";

function Explication({ titre, texte, image, lien, texteBouton }) {
  return (
    <div className="containerExplication">
      <div className="explicationGauche">
        <h2>{titre}</h2>
        <p>{texte}</p>
        <Link to={lien} className="explication-btn">
          {texteBouton}
        </Link>
      </div>
      <div className="explicationDroite">
        <img src={image} alt={titre} />
      </div>
    </div>
  );
}
export default Explication;
