import facebook from "../../Assest/img/Iconos/facebook.png";
import instagram from "../../Assest/img/Iconos/instagram.png";
import Logo from "../../Assest/img/logo/logo.png";
import "./styles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img src={Logo} alt="logo" width={100}></img>
      </div>
      <nav>
        <ul>
          <li>
            <img src={facebook} alt="facebook" width={30} height={30} />
          </li>
          <li>
            <img src={instagram} alt="instagram" width={30} height={30} />
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Footer;
