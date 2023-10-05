import { NavLink, Link } from "react-router-dom";
import "./styles.css";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../../Assest/img/logo/logo.png";

const NavBar = () => {
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
      </ul>
      <NavLink to="/cart">
        <CartWidget />
      </NavLink>
    </nav>
  );
};
export default NavBar;
