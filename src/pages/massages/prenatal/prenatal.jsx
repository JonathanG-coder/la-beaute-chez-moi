import "./prenatal.css";
import Prenatal from "../../../assets/massage/prenatal1.jpg";
import Affiche from "../../../components/affiche/affiche";

function prenatal() {
  return (
    <Affiche
      titre={`MASSAGE PRENATAL POUR VOTRE BEBE & VOUS`}
      sousTitre="Quand le ventre se fait trop lourd"
      image={Prenatal}
      description={{
        accroche: "À quoi sert le massage prenatal ?",
        details:
          " Le massage prénatal est destiné aux femmes enceintes, dès le 4ème mois de grossesse, et les accompagnera jusqu’à leur terme pour leur apporter toute la sérénité nécessaire.",
      }}
    />
  );
}

export default prenatal;
