import "../footer/footer.css";
import logo from "../assets/Logo-blanc.png";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="LOGO du site LA BEAUTE CHEZ MOI" />
        </div>
        <div className="footer-right">
          <td>
            <strong>Informations : </strong>
          </td>
          <div className="footer-right-infos">
            <div className="footer-infos">
              <p>
                <strong>Adresse :</strong><a href="https://www.google.com/maps/place/64250+Espelette/@43.3226866,-1.5344936,12z/data=!4m15!1m8!3m7!1s0xd513ca3d30bb459:0x158cd74bfcaa3df5!2s64250+Espelette!3b1!8m2!3d43.3411775!4d-1.4493722!16zL20vMDhkbG1x!3m5!1s0xd513ca3d30bb459:0x158cd74bfcaa3df5!8m2!3d43.3411775!4d-1.4493722!16zL20vMDhkbG1x?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D">Espelette </a>
              </p>
              <p>
                <strong>Telephone :</strong> 00 11 ..
              </p>
              <p>
                <strong>Horaires :</strong> Selon RDV
              </p>
              <p>
                <strong>E-mail :</strong> xx@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-reseaux-sociaux">
              <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
              ></link>
              <a href="#" class="fa fa-facebook"></a>
              <a href="#" class="fa fa-twitter"></a>
            </div>
      <div className="footer-copyright">
      <p>Copyright © 2025 LA BEAUTE CHEZ MOI</p>
      </div>
      
    </footer>
  );
}

export default Footer;
