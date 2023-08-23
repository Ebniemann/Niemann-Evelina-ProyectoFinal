import "./styles.css";
import Title from "../Title/Title";
import SubTitle from "../SubTitle/SubTitle";
import Button from "../Button/Button";
import ImgHome from "../../Assest/img/Img-presentation/inicio.jpg";

const ItemList = () => {
  return (
    <>
      <section className="presentation">
        <div className="description">
          <Title text="Únete a nuestra comunidad y reescribe tu futuro" />
          <SubTitle text="Vas a aprender cómo conectar tu aprendizaje con proyectos reales para que puedas comenzar a tener impacto en un trabajo desde el primer día." />
        </div>
        <img src={ImgHome} alt="imagen Home" width={500} height={500}></img>
      </section>

      <h2>Carreras</h2>
      <section className="cards">
        <div className="card">
          <div className="card-header">Product Web</div>
          <div className="card-body text-secondary">
            <h5 className="card-title">Incluye 3 cursos</h5>
            <p className="card-text">
              <li>Product Manager</li>
              <li>Diseño UX/UI</li>
              <li>Desarrollo Web</li>
            </p>
            <p>$1000</p>
          </div>
          <Button text="Agregar al carrito" />
        </div>
        <div className="card">
          <div className="card-header">Product</div>
          <div className="card-body text-secondary">
            <h5 className="card-title">Incluye 2 cursos</h5>
            <p className="card-text">
              <li>Product Manager</li>
              <li>E-commerce</li>
            </p>
            <p>$2000</p>
          </div>
          <Button text="Agregar al carrito" />
        </div>
        <div className="card">
          <div className="card-header">Desarrollo de aplicaciones</div>
          <div className="card-body text-secondary">
            <h5 className="card-title">Incluye 4 cursos</h5>
            <p className="card-text">
              <li>Desarrollo Web</li>
              <li>JavaScript</li>
              <li>React Js</li>
              <li>Desarrollo de Aplicaciones</li>
            </p>
            <p>$3000</p>
          </div>
          <Button text="Agregar al carrito" />
        </div>
        <div className="card">
          <div className="card-header">Desarrollo Full Stack</div>
          <div className="card-body text-secondary">
            <h5 className="card-title">Incluye 4 cursos</h5>
            <p className="card-text">
              <li>Desarrollo Web</li>
              <li>JavaScript</li>
              <li>React Js</li>
              <li>Programación Backend</li>
            </p>
            <p>$4000</p>
          </div>
          <Button text="Agregar al carrito" />
        </div>
      </section>
    </>
  );
};
export default ItemList;
