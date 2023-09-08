import "./styles.css";
import Button from "../Button/Button";
import SubTitle from "../SubTitle/SubTitle";

const Form = () => {
  return (
    <form className="contact" id="contacto">
      <SubTitle text={"Contáctenos"} />
      <div className="mb-3">
        <label for="name" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Evelina Niemann"
        />
      </div>
      <div className="mb-3">
        <label for="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label for="text-area" className="form-label">
          Consulta
        </label>
        <textarea className="form-control" id="text-area" rows="3"></textarea>
      </div>
      <Button text={"Enviar"} />
    </form>
  );
};
export default Form;
