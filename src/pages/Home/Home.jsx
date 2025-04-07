import "./home.css";
import { useState } from "react";
import logo from "../../assets/logo/Logo-blanc.png";
import bio from "../../assets/regard/sourcils2.jpg";

function Home() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      {/* Présentation */}
      <div className="home-presentation">
        <h1>La Beauté Chez Moi</h1>
        <button>Prendre Rendez-vous</button>
      </div>

      {/* Biographie */}
      <div className="bio">
        <div className="bio-img">
          <img
            src={bio}
            alt="Image d'une femme qui réalise des prestations de beauté du regard"
          />
        </div>
        <div className="bio-content">
          <div className="bio-titre">
            <p>-L'expérience-</p>
            <h2> La beauté Chez Vous </h2>
          </div>
          <div className="bio-texte">
            <p>
              Après plusieurs années dans le domaine médical, où j'ai appris à
              prendre soin des autres avec rigueur et bienveillance, j'ai choisi
              de me réorienter vers le monde de la beauté.
            </p>

            {isExpanded && (
              <>
                <p>
                  Cette reconversion m'a permis de combiner mes compétences en soins et mon désir profond
                  d'aider les autres à se sentir bien dans leur peau.
                </p>
                <p>
                  Formée dans les domaines de l'extension et du rehaussement de cils,
                  des massages, de la manucure et de l'épilation des sourcils...
                </p>
                <p>
                  Dans un cadre intime et serein, je vous accueille avec plaisir chez moi,
                  où chaque soin est réalisé avec des produits de qualité.
                </p>
                <p>
                  Mon expérience médicale m’a appris l’importance de l’écoute et du
                  respect des besoins individuels, afin que chaque moment soit une véritable parenthèse de bien-être.
                </p>
                <p>
                  Merci de me faire confiance ! Contactez-moi pour plus d'informations ou pour réserver votre rendez-vous.
                </p>
              </>
            )}

            <button className="bio-button" onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? "Lire moins" : "Lire la suite"}
            </button>
          </div>
        </div>
      </div>

      {/* Prestations */}
      <section className="home-prestations">
        <img src={logo} alt="logo du site" />
        <h2>Découvrez mes prestations</h2>
        <div className="grid-container">
          <div className="grid-item item1">
            <span>Beauté du regard</span>
          </div>
          <div className="grid-item item2">
            <span>Onglerie</span>
          </div>
          <div className="grid-item item3">
            <span>Massages</span>
          </div>
        </div>
      </section>

      <section className="avis-client"></section>
    </div>
  );
}

export default Home;
