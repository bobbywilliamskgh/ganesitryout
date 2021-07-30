import Tilt from "react-parallax-tilt";
import "./Logo.css";
import LogoGanesi from "./logo-ganesi.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="Tilt br2 shadow-2" options={{ max: 50 }} style={{ maxWidth: "250px", width: "100%", height: "auto" }}>
        <div className="Tilt-inner">
          {" "}
          <img style={{ paddingTop: "5px" }} src={LogoGanesi} alt="logo-ganesi" />{" "}
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
