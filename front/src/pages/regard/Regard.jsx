import Affiche from "../../components/affiche/Affiche";
import Prestation from "../../components/prestation/Prestation";
import Tarif from "../../components/tarif/Tarif";
import { useEffect } from "react";

function Regard() {
  const tarification = [
    {
      titre: "Rehaussement de cils",
      sousChoix: ["Rehaussement de cils simple = 30 €", 
        "Rehaussement cils + teinture : 40€ ",
         "Rehaussement DELUX : 50 €"],
    },
    {
      titre: "Extension de cils",
      sousChoix: [
        "Pose cil à cil : 50 €",
        "Pose volume russe : 70 € ",
        "Dépose  : 20 €",
      ],
    },
    {
      titre: "Sourcils",
      sousChoix: [
        "Restructuration : 30 €",
        "Restructuration + teinture sourcils : 40 €",
        "Teinture sourcils : 15 €",
        "Brow lift : 70 €"
      ],
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <Affiche
        titre={`LA BEAUTE DU REGARD <br /> Vos Cils et Sourcils`}
        sousTitre="La Beauté du Regard"
        image="https://res.cloudinary.com/djbvkngqe/image/upload/v1756727994/regard_lds6sf.jpg"
        alt= "Rehaussement de cils"
        description={{
          accroche: "Des cils qui parlent, un regard qui captive.",
          details: `Sublimez votre regard avec nos soins spécialisés : rehaussement de
           cils, extensions, brow lift et restructuration des sourcils. Chaque
           prestation est réalisée sur-mesure pour mettre en valeur vos traits et
           offrir un résultat naturel et durable. Réservez votre rendez-vous et
           laissez-nous révéler toute l’intensité de votre regard !`,
        }}
      />
      {/*  Prestations  */}
      <Prestation
        titre={"Votre Regard"}
        image="https://res.cloudinary.com/djbvkngqe/image/upload/v1756727977/Rehaussement2_tbldhv.jpg"
        alt="Rehaussement de cils"
        sousTitre={"Le rehaussement de cils 🌸"}
        description={
          "Sublimez votre regard avec notre rehaussement de cils. Une solution naturelle pour des cils courbés, volumineux et longs"
        }
        lien="/rehaussement"
      />
      <Prestation
        titre={""}
        image="https://res.cloudinary.com/djbvkngqe/image/upload/v1756727976/Rehaussement3_eajueu.jpg"
        alt="Rehaussement de cils"
        sousTitre={"L'extension de cils ✨"}
        description={`Optez pour nos extensions de cils : Volume Russe pour un regard intense ou Cil à Cil pour un effet plus naturel. Des cils sublimes, sur mesure, pour chaque occasion.`}
        lien="/extension"
        reverse={true}
      />
      <Prestation
        titre={""}
        image="https://res.cloudinary.com/djbvkngqe/image/upload/v1756727979/Sourcils_nvagym.jpg"
        alt="Restructuration des sourcils"
        sousTitre={"Vos sourcils 🖌️"}
        description={
          "Sublimez vos sourcils avec nos services de restructuration, teinture ou Brow Lift. Obtenez des sourcils parfaits, définis et naturels."
        }
        lien="/sourcils"
      />
      {/*  Tarif  */}
      <Tarif prestations={tarification} />
    </div>
  );
}

export default Regard;
