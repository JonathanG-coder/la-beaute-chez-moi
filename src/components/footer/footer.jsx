import "../footer/footer.css";
import logo from "../../assets/logo/Logo-blanc.png";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
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
            <div className="box3">
              <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
              />
              <a href="#" className="fa fa-instagram"></a>
            </div>
          </div>
          {/* LES SOINS */}
          <div className="box2Lien">
            <h3>LES SOINS</h3>
            <div className="LesSoinsInfos">
              <div className="LesSoinsInfosG">
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

              {/* COPYRIGHT */}
              <div className="box4">
                <p>-Copyright © 2025 LA BEAUTE CHEZ MOI-</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
