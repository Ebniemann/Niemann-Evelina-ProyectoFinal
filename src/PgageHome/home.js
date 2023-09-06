import Title from "../component/Title/Title";
import SubTitle from "../component/SubTitle/SubTitle";
import ImgHome from "../Assest/img/Img-presentation/inicio.jpg";
import ItemList from "../component/ItemListContainer/ItemListContainer";
import { ToastContainer } from "react-toastify";
import Layout from "../component/Layout/Layout";
import "./styles.css";

const Home = () => {
  return (
    <Layout>
      <section className="presentation">
        <div className="description">
          <Title text={"Únete a nuestra comunidad y reescribe tu futuro"} />
          <SubTitle
            text={
              "Vas a aprender cómo conectar tu aprendizaje con proyectos reales para que puedas comenzar a tener impacto en un trabajo desde el primer día."
            }
          />
        </div>
        <img src={ImgHome} alt="imagen Home" width={500} height={500}></img>
      </section>
      <ItemList greeting={"Carreras"} />
      <ToastContainer />
    </Layout>
  );
};
export default Home;
