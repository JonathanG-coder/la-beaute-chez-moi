import imgaccueil from "../../assets/Manucure&Beauté.jpg";
import "./manucure.css";
import posevernis from "../../assets/Manucure-et beaute-des-ongles.jpg";
import onglegel from "../../assets/ongle-en-gel.jpg";


function manucure() {
    return (
        <div className="cont-header">
            <div className="cont-header-titre"><h1>MANUCURE & BEAUTE DES ONGLES</h1></div>
            <div className="cont-header-img"><img src={imgaccueil} alt="Des mains d'une jeunes femmes croisé sur une robe de marié blanche" /></div>
        </div>,
        <section>
        <div className="explication">
            <h2>Prendre une manucure</h2>
            <p>...</p>
            <button>Prendre Rendez-vous</button>
        </div>
        </section>,
        <section>
            <h2>Mains et Pieds</h2>
            <div className="prestations">
                <div className="prestations-1g"><img src={posevernis} alt="pose de vernis sur ongles" /></div>
                <div className="prestations-1dr"><h3>Pose de vernis</h3><p>...</p></div>
                <div className="prestations-2g"><h3>Ongle en Gel</h3><p>...</p></div>
                <div className="prestations-2dr"><img src={onglegel} alt="des mains sur une serviette de plage" /></div>

            </div>
        </section>

        
    );

}

export default manucure;