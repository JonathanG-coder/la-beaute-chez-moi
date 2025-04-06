import "./regard.css";
import regards from "../../assets/regard.jpg"

function regard() {
  return (
    <div className="container">
      <div className="cont-header">
        <div className="cont-header-titre">
          <h1>
            BEAUTE DU REGARD
          </h1>
        </div>
        <div className="cont-header-img">
          <img
            src={regards}
            alt="Une femme qui se fait un rehaussement de cils"
          />
        </div>
      </div>
    </div>
  );
}

export default regard;
