import "./home.css";
import logo from "../../assets/Logo-blanc.png";
import bio from "../../assets/sourcils2.jpg";

function home() {
  return (
    <div>
      {/* presentation */}
      <div className="home-presentation">
        <h1>La Beauté Chez Moi</h1>
        <button>Prendre Rendez-vous</button>
      </div>

      {/* biographie */}
      <div className="bio">
        <div className="bio-img">
          <img
            src={bio}
            alt="Image d'une femme qui realise des prestation de beauté du regard"
          />
        </div>
        <div className="bio-titre">
          <p>-L'expérience-</p>
          <h2> La beauté Chez Vous </h2>
        </div>
        <div className="bio-texte">
          <p>
            Après plusieurs années dans le domaine médical, où j'ai appris à
            prendre soin des autres avec rigueur et bienveillance, j'ai choisi
            de me réorienter vers le monde de la beauté. Cette reconversion m'a
            permis de combiner mes compétences en soins et mon désir profond
            d'aider les autres à se sentir bien dans leur peau.
          </p>
          <p>
            Formée dans les domaines de l'extension et du rehaussement de cils,
            des massages, de la manucure et de l'épilation des sourcils, je mets
            un point d'honneur à offrir des soins de qualité, réalisés avec une
            grande attention, pour que chaque client se sente à la fois détendu
            et sublimé.
          </p>
          <p>
            Dans un cadre intime et serein, je vous accueille avec plaisir chez
            moi, dans un environnement sain, où chaque soin est réalisé avec des
            produits de qualité, respectueux de votre peau et de vos besoins.
          </p>
          <p>
            Mon expérience médicale m’a appris l’importance de l’écoute et du
            respect des besoins individuels, afin que chaque moment passé ici
            soit une véritable parenthèse de bien-être.{" "}
          </p>
          <p>
            Merci de me faire confiance pour prendre soin de vous. Contactez-moi
            pour plus d'informations ou pour réserver votre rendez-vous. J’ai
            hâte de vous rencontrer et de vous offrir un soin personnalisé, en
            toute tranquillité et professionnalisme.
          </p>
        </div>
      </div>

      {/* Prestations */}
      <section className="home-prestations">
        <img src={logo} alt="logo du site" />
        <h2>Decouvrez mes prestations</h2>
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

export default home;
