import ImgError from "../Assest/img/404.jpg";
import "./styles.css";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="error">
      <div className="image">
        <img src={ImgError} alt="Page 404" />
      </div>
      <div className="text">
        <p>PAGE NOT FOUND...</p>
        <Link className="fill" to="/">
          Volver a Home
        </Link>
      </div>
    </div>
  );
};

export default Page404;
