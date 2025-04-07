import "./prestation.css";

function Prestation({titre, image1, sousTitre, description}) {
  return (
    <div className="prestations-container">
      <h2 dangerouslySetInnerHTML={{ __html: titre }} />
      <div className="prestations-box">
        <div className="prestations-item">
          <img src={image1} alt={sousTitre} />
        </div>
        <div className="prestations-item">
          <h3>{sousTitre}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Prestation;
