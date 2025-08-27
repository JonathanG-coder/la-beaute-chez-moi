import imgaccueil from "../../assets/onglerie/Manucure&Beaute.jpg";
import "./Manucure.css";
import manucure1 from "../../assets/onglerie/manucure1.jpg";
import onglegel from "../../assets/onglerie/ongle-en-gel.jpg";
import Affiche from "../../components/affiche/Affiche";
import Tarif from "../../components/tarif/Tarif";
import Prestation from "../../components/prestation/Prestation";
import { useEffect } from "react";

function Manucure() {

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);


  const tarification = [
    {
      titre: "Manucure",
      sousChoix: ["Manucure = 20 €", "Manucure + pose de vernis : 30€ "],
    },
    {
      titre: "Vernis Semi permanent",
      sousChoix: [
        "Pose de vernis semis permanent : 30€",
        "Dépose  et pose de vernis Semi permanent : 40€ ",
        "Dépose vernis semis permanent : 10€",
      ],
    },
    {
      titre: "Pose gel",
      sousChoix: [
        "Pose complète en gel : 65 €",
        "Remplissage : 40 €",
        "Retrait ongle en gel : 25 €",
      ],
    },
    {
      titre: "Onglerie  pieds ",
      sousChoix: [
        "Pose de vernis classique : 15 €",
        "Pose de vernis semis permanent : 30 €",
        "Dépose et pose de vernis Semi permanent : 40 €",
        "Dépose vernis semis permanent : 10 €",
      ],
    },
  ];

  return (
    <div className="container">
      <Affiche
        titre={`MANUCURE & <br /> BEAUTE DES ONGLES`}
        sousTitre="Prendre une manucure"
        image={imgaccueil}
        description={{
          accroche:
            "Elégance et soin au bout des ongles",
          details: `Offrez à vos mains et pieds un soin digne de ce nom avec notre service
                  de pose de vernis et d'ongles en gel. Que ce soit pour une occasion
                  spéciale ou pour un quotidien élégant, nous mettons à votre
                  disposition une gamme de couleurs et de textures adaptées à toutes vos
                  envies. Laissez-vous chouchouter dans une ambiance chaleureuse et
                  relaxante, et repartez avec des mains et pieds sublimés. Réservez dès
                  maintenant votre rendez-vous pour une expérience beauté unique !`,
        }}
      />
      {/*  Prestations  */}
      <Prestation
        titre={"Mains et Pieds"}
        image={manucure1}
        sousTitre={"Pose de vernis 💅"}
        description={
          "Pose de vernis classique ou semi permanent : sublimez vos mains avec une pose de vernis classique ou semi permanent. Je prends le soin de limer vos ongles et repousser les cuticules avant la pose de vernis afin d’avoir un travail de précision."
        }
      />

      <Prestation
        titre={""}
        image={onglegel}
        sousTitre={"Ongle en gel 💎"}
        description={`Avec capsule ou en chablon, apportez plus de longueur à vos ongles
        et permettez-vous quelques folies avec des décorations Nail Art.`}
        reverse={true}
      />

      {/*  Tarif  */}
      <Tarif prestations={tarification} />
    </div>
  );
}

export default Manucure;
