import "./explication.css"

function Explication({titre, texte, image}) {
  return (
    <div className="containerExplication">
      <div className="explicationGauche">
        <h2>{titre}</h2>
        <p>{texte}</p>
      </div>
      <div className="explicationDroite">
        <img src={image} alt={titre} />
      </div>
    </div>
  );
}
export default Explication;
