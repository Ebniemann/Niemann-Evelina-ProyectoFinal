import "./styles.css";
import coursesImg from "../Assest/img/Img-presentation/carrera-home.png";
import Layout from "../component/Layout/Layout";
import Title from "../component/Title/Title";
import SubTitle from "../component/SubTitle/SubTitle";
import ItemList from "../component/ItemListContainer/ItemListContainer";
import { ToastContainer } from "react-toastify";

const CoursesPage = () => {
  return (
    <Layout>
      <section class="presentation">
        <div class="description">
          <Title text={"Únete a nuestra comunidad y reescribe tu futuro"} />
          <SubTitle
            text={
              "Vas a aprender cómo conectar tu aprendizaje con proyectos reales para que puedas comenzar a tener impacto en un trabajo desde el primer día."
            }
          />
        </div>

        <img
          src={coursesImg}
          alt="Mujer con una notebook"
          width={500}
          height={500}
        />
      </section>
      <ItemList greeting={"Carreras"} />
      <ToastContainer />
    </Layout>
  );
};
export default CoursesPage;
