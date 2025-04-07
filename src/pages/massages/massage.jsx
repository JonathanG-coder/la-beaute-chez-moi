import "./massage.css";
import Massage from "../../assets/massage/Massage.jpg";
import Affiche from "../../components/affiche/affiche";

function regard() {
  return (
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
  );
}

export default regard;
