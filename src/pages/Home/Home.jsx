import './home.css';
import logo from "../../assets/Logo-blanc.png";
import regard from "../../assets/Beaute-du-regard.jpg";
import manucure from "../../assets/manucures.jpg";
import massage from "../../assets/massages.jpg"



function Home() {
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
          <div className="grid-item"><img src={regard} alt="Une femme qui se fait rehausser ses cils" /></div>
          <div className="grid-item"><img src={manucure} alt="Une femme qui se fait faire les ongles" /></div>
          <div className="grid-item"><img src={massage} alt="Une femme qui se fait masser le dos" /></div>
        </div>
      </section>








    </div>
  );
}

export default Home;
