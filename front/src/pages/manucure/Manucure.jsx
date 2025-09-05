import { useEffect } from "react";
import Affiche from "../../components/affiche/Affiche";
import Tarif from "../../components/tarif/Tarif";
import Prestation from "../../components/prestation/Prestation";
import "./Manucure.css";

function Manucure() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tarification = [
    {
      titre: "Manucure",
      sousChoix: ["Manucure = 20 €", "Manucure + pose de vernis : 30€"],
    },
    {
      titre: "Vernis Semi permanent",
      sousChoix: [
        "Pose de vernis semis permanent : 30€",
        "Dépose et pose de vernis Semi permanent : 40€",
        "Dépose vernis semis permanent : 10€",
      ],
    },
    {
      titre: "Pose gel",
      sousChoix: ["Pose complète en gel : 65 €", "Remplissage : 40 €", "Retrait ongle en gel : 25 €"],
    },
    {
      titre: "Onglerie pieds",
      sousChoix: [
        "Pose de vernis classique : 15 €",
        "Pose de vernis semis permanent : 30 €",
        "Dépose et pose de vernis Semi permanent : 40 €",
        "Dépose vernis semis permanent : 10 €",
      ],
    },
  ];

  return (
    <div className="manucure-container">
      <Affiche
        titre={`MANUCURE & <br /> BEAUTE DES ONGLES`}
        sousTitre="Prendre une manucure"
        image="https://res.cloudinary.com/djbvkngqe/image/upload/v1756727939/Manucure_Beaute_vc1bly.jpg"
        alt="Mains d'une femme, posées sur une robe de mariée"
        description={{
          accroche: "Elégance et soin au bout des ongles",
          details: `Offrez à vos mains et pieds un soin digne de ce nom avec notre service
                    de pose de vernis et d'ongles en gel. Que ce soit pour une occasion
                    spéciale ou pour un quotidien élégant, nous mettons à votre
                    disposition une gamme de couleurs et de textures adaptées à toutes vos
                    envies. Laissez-vous chouchouter dans une ambiance chaleureuse et
                    relaxante, et repartez avec des mains et pieds sublimés. Réservez dès
                    maintenant votre rendez-vous pour une expérience beauté unique !`,
        }}
      />

      <Prestation
        titre="Mains et Pieds"
        image="https://res.cloudinary.com/djbvkngqe/image/upload/v1756727938/manucure1_o5admw.jpg"
        alt="Pose de vernis sur l'ongle d'une femme"
        sousTitre="Pose de vernis 💅"
        description="Pose de vernis classique ou semi permanent : sublimez vos mains avec une pose de vernis classique ou semi permanent. Je prends le soin de limer vos ongles et repousser les cuticules avant la pose de vernis afin d’avoir un travail de précision."
      />

      <Prestation
        titre=""
        image="https://res.cloudinary.com/djbvkngqe/image/upload/v1756727943/ongle-en-gel_sxkwsa.jpg"
        alt="Mains d'une femme sur une serviette de plage"
        sousTitre="Ongle en gel 💎"
        description={`Avec capsule ou en chablon, apportez plus de longueur à vos ongles
        et permettez-vous quelques folies avec des décorations Nail Art.`}
        reverse={true}
      />

      <Tarif prestations={tarification} />
    </div>
  );
}

export default Manucure;
