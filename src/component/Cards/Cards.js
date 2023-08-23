import "./styles.css";
import Button from "../Button/Button";

const Card = () => {
  return (
    <>
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
            <p className="price">$1000</p>
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
            <p className="price">$2000</p>
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
            <p className="price">$3000</p>
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
            <p className="price">$4000</p>
          </div>
          <Button text="Agregar al carrito" />
        </div>
      </section>
    </>
  );
};
export default Card;
