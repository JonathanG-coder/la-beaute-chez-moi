import "./contact.css";
import Contact from "../../assets/Contact.jpg";
import Affiche from "../../components/affiche/affiche";

function contact() {
  return (
    <Affiche
      titre={`CONTACTER GABRIELA`}
      sousTitre="HELLO"
      image={Contact}
      description={{
        accroche: "Vous souhaitez me contacter ?",
        details: `Adressez-votre demande : xx@gmail.Com. C'est avec plaisir que je vous répondrai du lundi au dimanche, le plus vite possible`,
      }}
    />
  );
}

export default contact;
