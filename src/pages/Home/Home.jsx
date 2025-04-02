import "./home.css";
import logo from "../../assets/Logo-blanc.png";

function home() {
  return (
    <div>
      {/* presentation */}
      <div className="home-presentation">
        <h1>La Beauté Chez Moi</h1>
        <button>Prendre Rendez-vous</button>
      </div>
      {/* Prestations */}
      <section className="home-prestations">
        <img src={logo} alt="logo du site" />
        <h2>Prestations</h2>
        <div className="grid-container">
          <div className="grid-item item1">
            <span>Beauté du regard</span>
          </div>
          <div className="grid-item item2">
            <span>Onglerie</span>
          </div>
          <div className="grid-item item3">
            <span>Massages</span>
          </div>
        </div>
      </section>
      <section className="avis-client"></section>

    </div>
  );
}

export default home;
