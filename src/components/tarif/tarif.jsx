import "./tarif.css";
import RDV from "../../assets/RDV.png";

function tarif() {
  return (
    <div className="tarif-header">
      <div className="tarif-header-img">
        <img
          src={RDV}
          alt="Une main qui a un telephone en main pour prendre un rendez-vous"
        />
      </div>
      <div className="tarif-header-titre">
        <h1>
          PRESTATIONS & <br /> TARIFS
        </h1>
        <ul>
          <li>Les Mains</li>
          <li>Les Pieds</li>
          <li>Forfait Mains & Pieds</li>
        </ul>
      </div>
    </div>
  );
}

export default tarif;
