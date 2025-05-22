import MassageIMG from "../../assets/massage/Massage.jpg";
import Affiche from "../../components/affiche/Affiche";
import Prestation from "../../components/prestation/Prestation";
import Californien2 from "../../assets/massage/californien2.jpg";
import Prenatal2 from "../../assets/massage/prenatal2.jpg";
import Tarif from "../../components/tarif/Tarif";
import { useEffect } from "react";

function Massage() {
  const tarification = [
    {
      titre: "Le Californien",
      sousChoix: ["Massage Californien 30 min : 45 €", 
        "Massage Californien  1h : 90 €"],
    },
    {
      titre: "Future Maman",
      sousChoix: [
        "Massage Femme Enceinte 1h : 80 €"
      ],
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <Affiche
        titre={`MASSAGE <br /> BIEN-ÊTRE`}
        sousTitre="LE MASSAGE DETENTE"
        image={MassageIMG}
        description={{
          accroche: "Une pause pour le corps et l’esprit",
          details:
            "Nos massages relaxants sont pensés pour apaiser les tensions, améliorer la circulation et vous offrir un moment de sérénité profonde. Laissez-vous emporter dans un univers de douceur.",
        }}
      />
      {/*  Prestations  */}
      <Prestation
        titre={"Vos massages coup de coeur"}
        image={Californien2}
        sousTitre={"Massage Californien 🌿"}
        description={
          "Offrez à votre corps une évasion sensorielle. Le massage californien, aux gestes lents et enveloppants, libère les tensions en douceur et favorise une profonde détente. Une bulle de bien-être rien que pour vous."
        }
        lien="/Californien"
      />
      <Prestation
        titre={""}
        image={Prenatal2}
        sousTitre={"Massage Prenatal 💕"}
        description={`Un instant de bien-être pour maman et bébé.
        Pensé pour accompagner la future maman en douceur, le massage prénatal apaise les tensions et procure un véritable cocon de détente. Un moment privilégié pour se reconnecter à soi… et à son bébé.`}
        lien="/Prenatal"
        reverse={true}
      />
      {/*  Tarif  */}
      <Tarif prestations={tarification} />
    </div>
  );
}

export default Massage;
