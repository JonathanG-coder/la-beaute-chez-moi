import "./tarif.css";
import RDV from "../../assets/RDV.png";

function tarif({ choix, sousChoix, }) {
  return (
    <div className="tarif-header">
      <div className="tarif-header-img">
        <img
          src={RDV}
          alt="Une main qui a un telephone en main pour prendre un rendez-vous"
        />
      </div>
      <div className="tarif-header-titre">
        <h2>
          PRESTATIONS & <br /> TARIFS
        </h2>
        <div className="menu-prestation">
          <div className="rubrique-prestation">
          <p>{choix}</p>
          </div>
          <div className="sousMenu-prestation">
          <p>{sousChoix}</p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default tarif;
