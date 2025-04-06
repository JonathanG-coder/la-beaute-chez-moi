import "./massage.css";
import Massage from "../../assets/Massage.jpg"

function regard() {
  return (
    <div className="container">
      <div className="cont-header">
        <div className="cont-header-titre">
          <h1>
            MASSAGE
          </h1>
        </div>
        <div className="cont-header-img">
          <img
            src={Massage}
            alt="Une femme qui se fait masser le dos"
          />
        </div>
      </div>
    </div>
  );
}

export default regard;
