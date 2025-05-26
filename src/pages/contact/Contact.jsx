import Contactimg from "../../assets/contact/contactimg.jpg";
import "./Contact.css";



export function Contact() {
  return (
    <div className="container">
      <div className="cont-header">
        
        <div className="cont-header-titre">
          <p>Besoin d'aide ?</p>
          <h1>Contactez Gabriela</h1>
          <div className="cont-header-infos">
            <a href="https://www.google.com/maps/place/405+Chem.+d'Olagainea,+64250+Espelette/@43.3509158,-1.4534263,79m/data=!3m1!1e3!4m15!1m8!3m7!1s0xd513c5e6bcd340b:0x1081eaceab7e67b8!2sChem.+d'Olagainea,+64250+Espelette!3b1!8m2!3d43.3560506!4d-1.4626695!16s%2Fg%2F1td5slnj!3m5!1s0xd513c8f88b3f8f9:0xdec149bfb67f4425!8m2!3d43.3509816!4d-1.453413!16s%2Fg%2F11tc1gnx99?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D">365 Olagaineko Bidea, Espelette</a>
            <a href="tel:+33612345678">06 12 34 56 78</a>
            <a href="mailto:gabygui27@gmail.com">gabygui27@gmail.com</a>
          </div>
        </div>
        <div className="cont-header-img">
          <img src={Contactimg} alt="Contact Gabriela" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
