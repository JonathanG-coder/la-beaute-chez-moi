import "./Affiche.css";

function Affiche({ titre, sousTitre, image, description, showButton = true }) {
  return (
    <div className="container">
      <div className="cont-header">
        <div className="cont-header-titre">
          <h1 dangerouslySetInnerHTML={{ __html: titre }} />
        </div>
        <div className="cont-header-img">
          <img src={image} alt={sousTitre} />
        </div>
      </div>
      <div className="cont-explication">
        <h2>{sousTitre}</h2>
        <p>{description.accroche}</p>
        <p>{description.details}</p>
        {showButton && <button>Prendre Rendez-vous</button>}
      </div>
    </div>
  );
}

export default Affiche;
