import RehaussementImg from "../../../assets/regard/rehaussement-cils.jpeg";
import Affiche from "../../../components/affiche/Affiche";
import Rehaussement4 from "../../../assets/regard/Rehaussement4.jpg";
import Explication from "../../../components/explication/Explication";
import Tarif from "../../../components/tarif/Tarif";
import { useEffect } from "react";

function Rehaussement() {
  const tarification = [
    {
      titre: "Rehaussement de cils",
      sousChoix: ["Rehaussement de cils simple = 30 €", 
        "Rehaussement cils + teinture : 40€ ",
         "Rehaussement DELUX : 50 €"],
    }
  ];

  useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className="container">
      <Affiche
        titre={`BEAUTE DU REGARD`}
        sousTitre="LE REHAUSSEMENT DE CILS"
        image={RehaussementImg}
        description={{
          accroche: "A quoi sert le rehaussement cils ?",
          details:
            "A la fois à redessiner votre regard, à l’agrandir et à le magnifier, grâce à une technique donnant aux cils une nouvelle courbe, plus ample et plus élégante. Rassurez-vous : le résultat n’a rien d’artificiel.",
        }}
      />
      {/*  Explication  */}

      <Explication
        titre={"Le rehaussement de cils 🌸"}
        texte={`Le rehaussement de cils est un soin délicat et totalement indolore, qui permet de recourber vos cils pour une durée d’environ 6 semaines, selon leur cycle naturel de pousse.

        Le résultat est bluffant : un regard plus ouvert, lumineux et naturel, sans ajout de volume ou d’épaisseur. Ce soin agit uniquement sur la courbure et, si vous le souhaitez, sur la teinte de vos cils, pour intensifier votre regard.

        Une séance dure environ 1 heure et vous permet de profiter de plusieurs semaines sans mascara ni maquillage. C’est le petit secret des initiées pour un regard réveillé dès le matin, sans effort. Et bonne nouvelle : le rehaussement est waterproof ! Vous pouvez vous baigner ou vous démaquiller sans craindre de perdre l’effet.

        Pour celles qui aiment le make-up, pas d’inquiétude : votre routine peut continuer normalement, le rehaussement reste intact.

        Et pour un regard encore plus harmonieux, pensez à compléter ce soin par une mise en beauté des sourcils : épilation, pince, teinture… À vous le regard parfait !`}
        lien="/regard"
        image={Rehaussement4}
        texteBouton={`DÉCOUVRIR LES AUTRES SOINS`}
      />
      {/*  Tarif  */}
      <Tarif prestations={tarification} />

    </div>
  );
}

export default Rehaussement;
