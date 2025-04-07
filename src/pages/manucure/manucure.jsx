import imgaccueil from "../../assets/onglerie/Manucure&Beauté.jpg";
import "./manucure.css";
import posevernis from "../../assets/onglerie/Manucure-et beaute-des-ongles.jpg";
import onglegel from "../../assets/onglerie/ongle-en-gel.jpg";
import Affiche from "../../components/affiche/affiche";
import Tarif from "../../components/tarif/tarif";

function manucure() {
  const prestations = [
    {
      titre: "Manucure",
      sousChoix: ["Manucure = 20 €", "Manucure + pose de vernis : 30€ "]
    },
    {
      titre: "Vernis Semi permanent",
      sousChoix: ["Pose de vernis semis permanent : 30€", "Dépose  et pose de vernis Semi permanent : 40€ ", "Dépose vernis semis permanent : 10€"]
    },
    {
      titre: "Pose gel",
      sousChoix: ["Pose complète en gel : 65 €", "Remplissage : 40 €", "Retrait ongle en gel : 25 €"]
    },
    {
      titre: "Onglerie  pieds ",
      sousChoix: ["Pose de vernis classique : 15 €", "Pose de vernis semis permanent : 30 €", "Dépose et pose de vernis Semi permanent : 40 €", "Dépose vernis semis permanent : 10 €"]
    }
  ];

  return (
    <div className="container">
      <Affiche
        titre={`MANUCURE & <br /> BEAUTE DES ONGLES`}
        sousTitre="Prendre une manucure"
        image={imgaccueil}
        description={{
          accroche:
            "Une pause pour le corps et l’esprit. Mettre une phrase d'accroche",
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
      <div className="prestations-container">
        <h2>Mains et Pieds</h2>
        <div className="prestations-box">
          <div className="prestations-item">
            <img src={posevernis} alt="pose de vernis sur ongles" />
          </div>
          <div className="prestations-item">
            <h3>Pose de vernis</h3>
            <p>
              Pose de vernis classique ou semi permanent : sublimez vos mains
              avec une pose de vernis classique ou semi permanent. Je prends le
              soin de limer vos ongles et repousser les cuticules avant la pose
              de vernis afin d’avoir un travail de précision.
            </p>
          </div>
          <div className="prestations-item">
            <h3>Ongle en Gel</h3>
            <p>
              Avec capsule ou en chablon, apportez plus de longueur à vos ongles
              et permettez-vous quelques folies avec des décorations Nail/art.
            </p>
          </div>
          <div className="prestations-item">
            <img src={onglegel} alt="des mains sur une serviette de plage" />
          </div>
        </div>
      </div>
      {/* prestation et tarif  */}
      <Tarif prestations={prestations} />
    </div>,
  );
}

export default manucure;
