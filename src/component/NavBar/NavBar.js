import "./styles.css";
import BuyCart from "../BuyCart/BuyCart";
import Logo from "../../Assest/img/logo/logo.png";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <a href="/" className="logo">
        <img src={Logo} alt="logo" width={100}></img>
      </a>
      <ul>
        <li>
          <a href="/cursos">Cursos</a>
        </li>
        <li>
          <a href="/faqs">FAQs</a>
        </li>
      </ul>
      <BuyCart width={25} height={25} />
    </nav>
  );
};
export default NavBar;
