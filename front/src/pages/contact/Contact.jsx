import { useEffect } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Contact.css";
import Formulaire from "../../components/formulaire/Formulaire";

export function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container">
        <div className="cont-header">
          <div className="cont-header-titre">
            <p>Besoin d'aide ?</p>
            <h1>Contactez Gabriela</h1>
            <div className="cont-header-infos">
              <a
                href="https://www.google.com/maps/place/405+Chem.+d'Olagainea,+64250+Espelette"
                target="_blank"
                rel="noopener noreferrer"
                className="info-item"
              >
                <FaMapMarkerAlt className="info-icon" />
                375 Olagaineko Bidea, Espelette
              </a>
              <a href="tel:+33612345678" className="info-item">
                <FaPhoneAlt className="info-icon" />
                06 12 34 56 78
              </a>
              <a href="mailto:gabygui27@gmail.com" className="info-item">
                <FaEnvelope className="info-icon" />
                gabygui27@gmail.com
              </a>
            </div>
          </div>
          <div className="cont-header-img">
            <img src="https://res.cloudinary.com/djbvkngqe/image/upload/v1756727874/contactimg_uxwxmd.jpg"
            alt="Contacter LaBeauteChezMoi" />
          </div>
        </div>
      </div>
      <div className="formulaire-container">
        <Formulaire />
      </div>
    </>
  );
}

export default Contact;
