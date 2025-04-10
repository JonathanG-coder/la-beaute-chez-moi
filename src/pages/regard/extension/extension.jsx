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
      sousTitre="LE REHAUSSEMENT DE CILS"
      image={Extension1}
      description={{
        accroche: "A quoi sert le rehaussement cils ?",
        details:
          "A la fois à redessiner votre regard, à l’agrandir et à le magnifier, grâce à une technique donnant aux cils une nouvelle courbe, plus ample et plus élégante. Rassurez-vous : le résultat n’a rien d’artificiel.",
      }}
    />
    
    {/*  Explication  */}

    <Explication
    titre={"Extension de cils ✨"}
    texte={`Offrez à votre regard une touche de glamour avec mes services d'extensions de cils. Que vous choisissiez la pose cil à cil pour un effet naturel ou le volume russe pour un regard plus intense, je vous garantis un résultat soigné et adapté à vos envies. Je propose également un service de dépose de cils pour retirer vos extensions en toute sécurité.`}
    image={Extension}
  />
  {/*  Tarif  */}
  <Tarif prestations={tarification} />
  </div>
  );
}

export default extension;
