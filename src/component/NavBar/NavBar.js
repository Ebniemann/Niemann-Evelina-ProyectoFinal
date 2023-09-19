import { NavLink, Link } from "react-router-dom";
import "./styles.css";
import BuyCart from "../BuyCart/BuyCart";
import Logo from "../../Assest/img/logo/logo.png";

const NavBar = ({ children }) => {
  return (
    <nav className="nav-bar">
      <Link to="/" className="logo">
        <img src={Logo} alt="logo" width={100}></img>
      </Link>
      <ul>
        <NavLink className="li" to="/cursos">
          Cursos
        </NavLink>
        <NavLink className="li" to="/faqs">
          FAQs
        </NavLink>
        {children}
      </ul>
      <BuyCart width={25} height={25} />
    </nav>
  );
};
export default NavBar;
