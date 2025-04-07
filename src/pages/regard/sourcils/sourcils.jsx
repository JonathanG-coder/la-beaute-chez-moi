import "./sourcils.css";
import Extension from "../../../assets/regard/Extension.jpg";
import Affiche from "../../../components/affiche/affiche";

function sourcils() {
  return (
    <Affiche
      titre={`BEAUTE DU REGARD L'ART DES  SOURCILS`}
      sousTitre="ENTRETIEN DES SOURCILS"
      image={Extension}
      description={{
        accroche: "À quoi sert l’entretien des sourcils ? ?",
        details:
          " Il permet de structurer votre regard, de l’harmoniser et de le sublimer, grâce à une technique qui redéfinit la forme naturelle de vos sourcils pour un effet plus équilibré et élégant. Rassurez-vous : le résultat reste naturel et s’adapte parfaitement à votre visage.",
      }}
    />
  );
}

export default sourcils;
