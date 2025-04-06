import "./rehaussement.css";
import Rehaussement from "../../../assets/rehaussement-cils.jpeg"
import Affiche from "../../../components/affiche/affiche";

function rehaussement() {
  return (
    <Affiche
      titre={`BEAUTE DU REGARD`}
      sousTitre="LE REHAUSSEMENT DE CILS"
      image={Rehaussement}
      description={{
        accroche: "A quoi sert le rehaussement cils ?",
        details:
          "A la fois à redessiner votre regard, à l’agrandir et à le magnifier, grâce à une technique donnant aux cils une nouvelle courbe, plus ample et plus élégante. Rassurez-vous : le résultat n’a rien d’artificiel.",
      }}
    />
  );
}

export default rehaussement;
