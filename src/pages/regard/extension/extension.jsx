import "./extension.css";
import Extension1 from "../../../assets/regard/Extension1.jpg"
import Affiche from "../../../components/affiche/affiche";
import Explication from "../../../components/explication/explication";
import Tarif from "../../../components/tarif/tarif";
import Extension from "../../../assets/regard/Extension.jpg";

function extension() {
  const tarification = [
    {
      titre: "Extension de cils",
      sousChoix: [
        "Pose cil à cil : 50 €",
        "Pose volume russe : 70 € ",
        "Dépose  : 20 €",
      ],
    }
  ]
  return (
    <div className="container">
    <Affiche
      titre={`BEAUTE DU REGARD`}
      sousTitre="L'EXTENSION DE CILS"
      image={Extension1}
      description={{
        accroche: "A quoi sert l'extension de cils ?",
        details:
          "L'extension de cils sublimera votre regard en apportant longueur, courbure et volume à vos cils naturels, pour un effet intense et glamour, sans avoir besoin de mascara",
      }}
    />
    
    {/*  Explication  */}

    <Explication
    titre={"Extension de cils ✨"}
    texte={`Offrez à votre regard une touche de glamour avec mes services d'extensions de cils. Que vous choisissiez la pose cil à cil pour un effet naturel ou le volume russe pour un regard plus intense, je vous garantis un résultat soigné et adapté à vos envies. Je propose également un service de dépose de cils pour retirer vos extensions en toute sécurité.`}
    lien="/regard"
    image={Extension}
  />
  {/*  Tarif  */}
  <Tarif prestations={tarification} />
  </div>
  );
}

export default extension;
