import "../footer/Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer>
      {/* LOGO */}
      <div className="boxlogo">
        <img src="https://res.cloudinary.com/djbvkngqe/image/upload/v1756727741/logo_qtzisz.png" alt="LOGO du site LA BEAUTE CHEZ MOI" />
      </div>
      {/* INFORMATIONS */}
      <div className="boxInfo">
        <h3>INFORMATIONS</h3>
        <a href="/" aria-current="page">
          Contacter Gabriela
        </a>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <a href="#" className="fa fa-instagram"></a>
      </div>
      {/* LES SOINS */}
      <div className="boxSoins">
        <h3>LES SOINS</h3>
        <a href="/Massages" aria-current="page">
          Massages
        </a>
        <a href="/Manucure" aria-current="page">
          Onglerie
        </a>
        <a href="/Regard" aria-current="page">
          Beauté du regard
        </a>
      </div>
      {/* COPYRIGHT */}
      <div className="boxCOPYRIGHT">
        <p>Copyright © {year} LA BEAUTE CHEZ MOI</p>
      </div>
    </footer>
  );
}

export default Footer;
