import ai_robot_chef from "../Ai_chefb.png";
import "../index.css";

const Header = () => {
  return (
    <header className="header">
      <a href="#home">
        <img src={ai_robot_chef} alt="ai_robot_chef" className="header_logo" />
      </a>
    </header>
  );
};

export default Header;
