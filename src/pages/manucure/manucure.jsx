import imgaccueil from "../../assets/Manucure&Beauté.jpg";
import "./manucure.css";
import posevernis from "../../assets/Manucure-et beaute-des-ongles.jpg";
import onglegel from "../../assets/ongle-en-gel.jpg";

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
      <div className="cont-prestations">
      <h2>Mains et Pieds</h2>
         <div className="prestations">
             <div className="prestations-1g"><img src={posevernis} alt="pose de vernis sur ongles" /></div>
            <div className="prestations-1dr"><h3>Pose de vernis</h3><p>...</p></div>
             <div className="prestations-2g"><h3>Ongle en Gel</h3><p>...</p></div>
            <div className="prestations-2dr"><img src={onglegel} alt="des mains sur une serviette de plage" /></div>

         </div>
      </div>




    </div>

    // <section>
    //     <h2>Mains et Pieds</h2>
    //     <div className="prestations">
    //         <div className="prestations-1g"><img src={posevernis} alt="pose de vernis sur ongles" /></div>
    //         <div className="prestations-1dr"><h3>Pose de vernis</h3><p>...</p></div>
    //         <div className="prestations-2g"><h3>Ongle en Gel</h3><p>...</p></div>
    //         <div className="prestations-2dr"><img src={onglegel} alt="des mains sur une serviette de plage" /></div>

    //     </div>
    // </section>
  );
}

export default manucure;
