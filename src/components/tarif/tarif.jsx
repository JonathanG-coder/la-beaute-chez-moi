import "./tarif.css";
import RDV from "../../assets/RDV.png";
import { useState } from "react";

function tarif({ choix1, choix2, choix3, sousChoix1, sousChoix2, sousChoix3 }) {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

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
            <button onClick={() => setOpen1(!open1)}>
              {open1 ? "➖" : "➕"} {choix1}
            </button>
            {open1 && (
              <div className="sousMenu-prestation">
                <p>{sousChoix1}</p>
              </div>
            )}

            <button onClick={() => setOpen2(!open2)}>
              {open2 ? "➖" : "➕"} {choix2}
            </button>
            {open2 && (
              <div className="sousMenu-prestation">
                <p>{sousChoix2}</p>
              </div>
            )}

            <button onClick={() => setOpen3(!open3)}>
              {open3 ? "➖" : "➕"} {choix3}
            </button>
            {open3 && (
              <div className="sousMenu-prestation">
                <p>{sousChoix3}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default tarif;
