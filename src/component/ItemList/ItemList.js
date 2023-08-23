import "./styles.css";
import Title from "../Title/Title";
import SubTitle from "../SubTitle/SubTitle";
import ImgHome from "../../Assest/img/Img-presentation/inicio.jpg";
import Carreras from "../Cards/Cards";

const ItemList = ({ greeting }) => {
  return (
    <>
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

      <h2>{greeting}</h2>
      <Carreras />
    </>
  );
};
export default ItemList;
