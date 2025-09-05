import "./Tarif.css";
import { useState } from "react";

function Tarif({ prestations }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="tarif-container">
      <div className="tarif-image-section">
        <img
          src="https://res.cloudinary.com/djbvkngqe/image/upload/v1756727875/RDV_izxks7.png"
          alt="Une main qui a un téléphone en main pour prendre un rendez-vous"
        />
      </div>

      <div className="tarif-info-section">
        <h2>
          PRESTATIONS & <br /> TARIFS
        </h2>

        <div className="tarif-menu">
          <div className="tarif-rubrique">
            {prestations.map((item, index) => (
              <div key={index}>
                <button className="tarif-rubrique-btn" onClick={() => toggle(index)}>
                  {openIndex === index ? "➖" : "➕"} {item.titre}
                </button>
                {openIndex === index && (
                  <div className="tarif-sousmenu">
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

export default Tarif;
