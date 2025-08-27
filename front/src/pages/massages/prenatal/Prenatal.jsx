import Prenatal1 from "../../../assets/massage/prenatal1.jpg";
import Affiche from "../../../components/affiche/Affiche";
import Tarif from "../../../components/tarif/Tarif";
import Explication from "../../../components/explication/Explication";
import PrenatalImg from "../../../assets/massage/Prenatal.jpg";
import { useEffect } from "react";

function Prenatal() {
  const tarification = [
    {
      titre: "Future Maman",
      sousChoix: ["Massage Femme Enceinte 1h : 80 €"],
    },
  ];

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="container">
      <Affiche
        titre={`MASSAGE PRENATAL POUR VOTRE BEBE & VOUS`}
        sousTitre="Quand le ventre se fait trop lourd"
        image={Prenatal1}
        description={{
          accroche: "À quoi sert le massage prenatal ?",
          details:
            " Le massage prénatal est destiné aux femmes enceintes, dès le 4ème mois de grossesse, et les accompagnera jusqu’à leur terme pour leur apporter toute la sérénité nécessaire.",
        }}
      />
      {/*  Prestations  */}
      <Explication
        titre={"Massage Prenatal 🤰"}
        texte={`Le massage prénatal est un soin spécialement conçu pour accompagner les futures mamans pendant leur grossesse. Ce massage doux et apaisant aide à soulager les douleurs liées aux changements corporels, à réduire le stress et à favoriser une détente profonde. Grâce à des techniques de massage ciblées, il améliore la circulation sanguine, réduit les tensions musculaires et permet de se reconnecter avec son corps de manière bienveillante. Un moment de sérénité et de bien-être essentiel pour la future maman et son bébé.`}
        lien="/massages"
        image={PrenatalImg}
        texteBouton={`DÉCOUVRIR LES AUTRES MASSAGES`}
      />
      {/*  Tarif  */}
      <Tarif prestations={tarification} />
    </div>
  );
}

export default Prenatal;
