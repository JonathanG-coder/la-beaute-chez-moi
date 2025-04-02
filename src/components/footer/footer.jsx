import "../footer/footer.css";
import logo from "../../assets/Logo-blanc.png";

function Footer() {
  return (
    <footer>
      <div className="container">
        {/* LOGO */}
        <div className="box box1">
          <img src={logo} alt="LOGO du site LA BEAUTE CHEZ MOI" />
        </div>

        {/* INFORMATIONS */}
        <div className="box box2">
          <h3>
            <strong>Informations :</strong>
          </h3>
          <div className="box2-info">
            <div className="box2-info boxA">
              <p>
                <strong>Adresse :</strong>
                <a
                  href="https://www.google.com/maps/place/64250+Espelette/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 <p>Espelette</p>
                </a>
              </p>
            </div>
            <div className="box2-info boxB">
              <p>
                <strong>Téléphone :</strong>
              </p>
              <p>00 11 22 33 44 </p>
            </div>
            <div className="box2-info boxC">
              <p>
                <strong>Horaires :</strong>
              </p>
              <p>Selon RDV</p>
            </div>
            <div className="box2-info boxD">
              <p>
                <strong>E-mail :</strong>
              </p>
              <p>
                {" "}
                <a href="mailto:xx@gmail.com">Jean-beaudruche@gmail.com</a>
              </p>
            </div>
          </div>
        </div>

        {/* RÉSEAUX SOCIAUX */}
        <div className="box box3">
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
          <a href="#" className="fa fa-facebook"></a>
          <a href="#" className="fa fa-twitter"></a>
        </div>

        {/* COPYRIGHT */}
        <div className="box box4">
          <p>Copyright © 2025 LA BEAUTE CHEZ MOI</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
