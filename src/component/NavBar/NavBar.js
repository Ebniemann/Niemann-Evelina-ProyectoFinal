import "./styles.css";
import BuyCart from "../BuyCart/BuyCart";
import Logo from "../../Assest/img/logo/logo.png";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <img src={Logo} alt="logo" width={100}></img>
      </div>
      <ul>
        <li>
          <a href="'">Carreras</a>
        </li>
        <li>
          <a href="'">FAQs</a>
        </li>
      </ul>
      <BuyCart width={25} height={25} />
    </nav>
  );
};
export default NavBar;
