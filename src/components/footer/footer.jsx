import "../footer/footer.css";
import logo from "../../assets/Logo-blanc.png";

function Footer() {
  return (
    <footer>
      <div className="container">
        {/* LOGO */}
        <div className="box1">
          <img src={logo} alt="LOGO du site LA BEAUTE CHEZ MOI" />
        </div>

        {/* INFORMATIONS */}
        <div className="box2">
          <div className="box2Info">
            <h3>INFORMATIONS</h3>
            <a href="/" aria-current="page">
              Contacter Gabriela
            </a>
          </div>
          {/* LES SOINS */}
          <div className="box2Lien">
            <h3>Les soins</h3>
            <a href="/" aria-current="page">
              Massages
            </a>
            <a href="/" aria-current="page">
              Onglerie
            </a>
            <a href="/" aria-current="page">
              Beauté du regard
            </a>
          </div>
        </div>

        {/* RÉSEAUX SOCIAUX */}
        <div className="box3">
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <a href="#" className="fa fa-facebook"></a>
          <a href="#" className="fa fa-twitter"></a>
        </div>

        {/* COPYRIGHT */}
        <div className="box4">
          <p>Copyright © 2025 LA BEAUTE CHEZ MOI</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
