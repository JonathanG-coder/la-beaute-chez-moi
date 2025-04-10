import "./sourcils.css";
import Affiche from "../../../components/affiche/affiche";
import Explication from "../../../components/explication/explication";
import Tarif from "../../../components/tarif/tarif";
import sourcils2 from "../../../assets/regard/sourcils2.jpg";
import sourcils3 from "../../../assets/regard/sourcils3.jpg";

function sourcils() {
  const tarification = [
    {
      titre: "Sourcils",
      sousChoix: [
        "Restructuration : 30 €",
        "Restructuration + teinture sourcils : 40 €",
        "Teinture sourcils : 15 €",
        "Brow lift : 70 €"
      ],
    },
  ]
  return (
    <div className="container">
    <Affiche
      titre={`BEAUTE DU REGARD <br> L'ART DES  SOURCILS`}
      sousTitre="ENTRETIEN DES SOURCILS"
      image={sourcils2}
      description={{
        accroche: "À quoi sert l’entretien des sourcils ?",
        details:
          " Il permet de structurer votre regard, de l’harmoniser et de le sublimer, grâce à une technique qui redéfinit la forme naturelle de vos sourcils pour un effet plus équilibré et élégant. Rassurez-vous : le résultat reste naturel et s’adapte parfaitement à votre visage.",
      }}
    />
    {/*  Explication  */}

    <Explication
    titre={"Entretien des sourcils 💖"}
    texte={`Sublimez votre regard avec un entretien de sourcils sur-mesure. Que ce soit pour une épilation précise, une mise en forme ou une teinture, je vous aide à révéler la beauté naturelle de vos sourcils. Je vous garantis un résultat impeccable et personnalisé, en harmonie avec la forme de votre visage, pour un regard parfaitement structuré et élégant.`}
    image={sourcils3}
  />
  {/*  Tarif  */}
  <Tarif prestations={tarification} />
    </div>
  );
}

export default sourcils;
