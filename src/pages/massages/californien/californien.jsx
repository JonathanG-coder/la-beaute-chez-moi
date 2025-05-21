import "./Californien.css";
import Californien from "../../../assets/massage/californien.jpg";
import Affiche from "../../../components/affiche/affiche";
import Explication from "../../../components/explication/explication";
import Californien3 from "../../../assets/massage/californien3.jpg";
import Tarif from "../../../components/tarif/tarif";

function californien() {
  const tarification = [
    {
      titre: "Le Californien",
      sousChoix: [
        "Massage Californien 30 min : 45 €",
        "Massage Californien  1h : 90 €",
      ],
    },
  ];
  return (
    <div className="container">
      <Affiche
        titre={`MASSAGE CALIFORNIEN <br> LA DOUCEUR A PORTER DE MAIN`}
        sousTitre="L'INSTANT CALIFORNIEN"
        image={Californien}
        description={{
          accroche: "À quoi sert le massage californien ?",
          details:
            "Le Californien est le massage sans doute parmi les plus prisés, sans doute car il œuvre des pieds à la tête pour une relaxation et une détente totales, et est particulièrement indiqué pour le mal du siècle : le stress. Créé dans les années 70 par Margaret Elke, il s’inspire de la douceur du massage Esalen qu’elle a combiné avec une démarche plus intérieure et émotive.",
        }}
      />
      {/*  Prestations  */}
      <Explication
        titre={"Massage Californien 💆‍♀️"}
        texte={`Offrez à votre corps une parenthèse de détente avec le massage californien, un soin enveloppant et apaisant qui vise à libérer les tensions et à favoriser une relaxation profonde. Ses mouvements doux et fluides, réalisés avec des huiles parfumées, offrent un véritable voyage sensoriel, permettant de détendre à la fois le corps et l'esprit. Ce massage est idéal pour réduire le stress, améliorer la circulation sanguine et retrouver une sensation de bien-être absolu.`}
        lien="/massage"
        image={Californien3}
      />
      {/*  Tarif  */}
      <Tarif prestations={tarification} />
    </div>
  );
}

export default californien;
