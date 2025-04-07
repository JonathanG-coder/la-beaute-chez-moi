import "./tarif.css";
import RDV from "../../assets/contact/RDV.png";
import { useState } from "react";

function tarif({ prestations }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="tarif-header">
      <div className="tarif-header-img">
        <img
          src={RDV}
          alt="Une main qui a un téléphone en main pour prendre un rendez-vous"
        />
      </div>

      <div className="tarif-header-titre">
        <h2>
          PRESTATIONS & <br /> TARIFS
        </h2>

        <div className="menu-prestation">
          <div className="rubrique-prestation">
            {prestations.map((item, index) => (
              <div key={index}>
                <button onClick={() => toggle(index)}>
                  {openIndex === index ? "➖" : "➕"} {item.titre}
                </button>
                {openIndex === index && (
                  <div className="sousMenu-prestation">
                    {item.sousChoix.map((choix, i) => (
                      <p key={i}>{choix}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default tarif;
