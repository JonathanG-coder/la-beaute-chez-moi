import "./massage.css";
import Massage from "../../assets/massage/Massage.jpg";
import Affiche from "../../components/affiche/affiche";
import Prestation from "../../components/prestation/prestation";
import Californien2 from "../../assets/massage/californien2.jpg";
import Prenatal2 from "../../assets/massage/prenatal2.jpg";

function regard() {
  return (
    <div className="container">
      <Affiche
        titre={`MASSAGE <br /> BIEN-ÊTRE`}
        sousTitre="LE MASSAGE DETENTE"
        image={Massage}
        description={{
          accroche: "Une pause pour le corps et l’esprit",
          details:
            "Nos massages relaxants sont pensés pour apaiser les tensions, améliorer la circulation et vous offrir un moment de sérénité profonde. Laissez-vous emporter dans un univers de douceur.",
        }}
      />
      {/*  Prestations  */}
      <Prestation
        titre={"Vos massage coup de coeur"}
        image={Californien2}
        sousTitre={"Massage Californien 🌿"}
        description={
          "Offrez à votre corps une évasion sensorielle. Le massage californien, aux gestes lents et enveloppants, libère les tensions en douceur et favorise une profonde détente. Une bulle de bien-être rien que pour vous."
        }
      />
      <Prestation
        titre={""}
        image={Prenatal2}
        sousTitre={"Massage Prenatal 💕"}
        description={`Un instant de bien-être pour maman et bébé.
        Pensé pour accompagner la future maman en douceur, le massage prénatal apaise les tensions et procure un véritable cocon de détente. Un moment privilégié pour se reconnecter à soi… et à son bébé.`}
        reverse={true}
      />
    </div>
  );
}

export default regard;
