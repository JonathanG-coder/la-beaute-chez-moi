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
                <strong>Adresse :</strong> Espelette
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
            <div className="footer-reseaux-sociaux">
              <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
              ></link>

              <a href="#" class="fa fa-facebook"></a>
              <a href="#" class="fa fa-twitter"></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
