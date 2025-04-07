import "./californien.css";
import Californien from "../../../assets/massage/californien.jpg";
import Affiche from "../../../components/affiche/affiche";

function californien() {
  return (
    <Affiche
      titre={`MASSAGE CALIFORNIEN LA DOUCEUR A PORTER DE MAIN`}
      sousTitre="L'INSTANT CALIFORNIEN"
      image={Californien}
      description={{
        accroche: "À quoi sert le massage californien ?",
        details:
          "Le Californien est le massage sans doute parmi les plus prisés, sans doute car il œuvre des pieds à la tête pour une relaxation et une détente totales, et est particulièrement indiqué pour le mal du siècle : le stress. Créé dans les années 70 par Margaret Elke, il s’inspire de la douceur du massage Esalen qu’elle a combiné avec une démarche plus intérieure et émotive.",
      }}
    />
  );
}

export default californien;
