import "../contact/contact.css"


function Contact() {
  

  return (
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
  );
}

export default Contact;
