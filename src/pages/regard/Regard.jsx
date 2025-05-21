import regards from "../../assets/regard/regard.jpg";
import Affiche from "../../components/affiche/Affiche";
import Rehaussement2 from "../../assets/regard/Rehaussement2.jpg";
import Prestation from "../../components/prestation/Prestation";
import Rehaussement3 from "../../assets/regard/Rehaussement3.jpg";
import Sourcils from "../../assets/regard/Sourcils.jpg";
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
        image={regards}
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
        image={Rehaussement2}
        sousTitre={"Le rehaussement de cils 🌸"}
        description={
          "Sublimez votre regard avec notre rehaussement de cils. Une solution naturelle pour des cils courbés, volumineux et longs"
        }
        lien="/rehaussement"
      />
      <Prestation
        titre={""}
        image={Rehaussement3}
        sousTitre={"L'extension de cils ✨"}
        description={`Optez pour nos extensions de cils : Volume Russe pour un regard intense ou Cil à Cil pour un effet plus naturel. Des cils sublimes, sur mesure, pour chaque occasion.`}
        lien="/extension"
        reverse={true}
      />
      <Prestation
        titre={""}
        image={Sourcils}
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
