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
      <div className="contact-container">
        <div className="contact-header">
          <div className="contact-header-left">
            <p>Besoin d'aide ?</p>
            <h1>Contactez Gabriela</h1>
            <div className="contact-info-list">
              <a
                href="https://www.google.com/maps/place/405+Chem.+d'Olagainea,+64250+Espelette"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-item"
              >
                <FaMapMarkerAlt className="contact-info-icon" />
                375 Olagaineko Bidea, Espelette
              </a>
              <a href="tel:+33612345678" className="contact-info-item">
                <FaPhoneAlt className="contact-info-icon" />
                06 12 34 56 78
              </a>
              <a href="mailto:gabygui27@gmail.com" className="contact-info-item">
                <FaEnvelope className="contact-info-icon" />
                gabygui27@gmail.com
              </a>
            </div>
          </div>
          <div className="contact-header-right">
            <img
              src="https://res.cloudinary.com/djbvkngqe/image/upload/v1756727874/contactimg_uxwxmd.jpg"
              alt="Contacter LaBeauteChezMoi"
            />
          </div>
        </div>
      </div>
      <div className="contact-form-section">
        <Formulaire />
      </div>
    </>
  );
}

export default Contact;
