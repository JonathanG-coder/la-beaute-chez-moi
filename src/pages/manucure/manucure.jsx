import imgaccueil from "../../assets/Manucure&Beauté.jpg";
import "./manucure.css";
import posevernis from "../../assets/Manucure-et beaute-des-ongles.jpg";
import onglegel from "../../assets/ongle-en-gel.jpg";
import RDV from "../../assets/RDV.png"

function manucure() {
  return (
    <div className="container">
      <div className="cont-header">
        <div className="cont-header-titre">
          <h1>
            MANUCURE & <br /> BEAUTE DES ONGLES
          </h1>
        </div>
        <div className="cont-header-img">
          <img
            src={imgaccueil}
            alt="Des mains d'une jeunes femmes croisé sur une robe de marié blanche"
          />
        </div>
      </div>
      <div className="cont-explication">
        <h2>Prendre une manucure</h2>
        <p>
          Offrez à vos mains et pieds un soin digne de ce nom avec notre service
          de pose de vernis et d'ongles en gel. Que ce soit pour une occasion
          spéciale ou pour un quotidien élégant, nous mettons à votre
          disposition une gamme de couleurs et de textures adaptées à toutes vos
          envies. Laissez-vous chouchouter dans une ambiance chaleureuse et
          relaxante, et repartez avec des mains et pieds sublimés. Réservez dès
          maintenant votre rendez-vous pour une expérience beauté unique !
        </p>
        <button>Prendre Rendez-vous</button>
      </div>

      <div className="prestations-container">
        <h2>Mains et Pieds</h2>
        <div className="prestations-box">
          <div className="prestations-item">
            <img src={posevernis} alt="pose de vernis sur ongles" />
          </div>
          <div className="prestations-item">
            <h3>Pose de vernis</h3>
            <p>
              Pose de vernis classique ou semi permanent : sublimez vos mains
              avec une pose de vernis classique ou semi permanent. Je prends le
              soin de limer vos ongles et repousser les cuticules avant la pose
              de vernis afin d’avoir un travail de précision.
            </p>
          </div>
          <div className="prestations-item">
            <h3>Ongle en Gel</h3>
            <p>
              Avec capsule ou en chablon, apportez plus de longueur à vos ongles
              et permettez-vous quelques folies avec des décorations Nail/art.
            </p>
          </div>
          <div className="prestations-item">
            <img src={onglegel} alt="des mains sur une serviette de plage" />
          </div>
        </div>
      </div>
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
    </div>
  );
}

export default manucure;
