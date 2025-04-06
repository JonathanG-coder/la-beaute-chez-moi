import "./regard.css";
import regards from "../../assets/regard.jpg";

function regard() {
  return (
    <div className="container">
      <div className="cont-header">
        <div className="cont-header-titre">
          <h1>
            BEAUTE DU REGARD <br />
            VOS CILS ET SOURCILS
          </h1>
        </div>
        <div className="cont-header-img">
          <img
            src={regards}
            alt="Une femme qui se fait un rehaussement de cils"
          />
        </div>
      </div>
      <div className="cont-explication">
        <h2>LA BEAUTE DU REGARD</h2>
        <p>Ce petit détail qui fait une grande différence</p>
        <p>
          Sublimez votre regard avec nos soins spécialisés : rehaussement de
          cils, extensions, brow lift et restructuration des sourcils. Chaque
          prestation est réalisée sur-mesure pour mettre en valeur vos traits et
          offrir un résultat naturel et durable. Réservez votre rendez-vous et
          laissez-nous révéler toute l’intensité de votre regard !
        </p>
        <button>Prendre Rendez-vous</button>
      </div>
    </div>
  );
}

export default regard;
