import "../footer/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      {/* LOGO */}
      <div className="boxlogo">
        <img
          src="https://res.cloudinary.com/djbvkngqe/image/upload/v1756727741/logo_qtzisz.png"
          alt="LOGO du site LA BEAUTE CHEZ MOI"
        />
      </div>
      {/* INFORMATIONS */}
      <div className="boxInfo">
        <h3>INFORMATIONS</h3>
        <Link to="/contact">Contacter Gabriela</Link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <a href="#" className="fa fa-instagram"></a>
      </div>
      {/* LES SOINS */}
      <div className="boxSoins">
        <h3>LES SOINS</h3>
        <Link to="/massages">Massages</Link>
        <Link to="/manucure">Onglerie</Link>
        <Link to="/regard">Beauté du regard</Link>
      </div>
      {/* COPYRIGHT */}
      <div className="boxCOPYRIGHT">
        <p>Copyright © {year} LA BEAUTE CHEZ MOI</p>
      </div>
    </footer>
  );
}

export default Footer;
