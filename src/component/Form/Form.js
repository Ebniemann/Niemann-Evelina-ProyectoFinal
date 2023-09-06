import "./styles.css";
import Button from "../Button/Button";
import SubTitle from "../SubTitle/SubTitle";

const Form = () => {
  return (
    <form class="contact" id="contacto">
      <SubTitle text={"Contáctenos"} />
      <div class="mb-3">
        <label for="name" class="form-label">
          Nombre
        </label>
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="Evelina Niemann"
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">
          Email
        </label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="name@example.com"
        />
      </div>
      <div class="mb-3">
        <label for="text-area" class="form-label">
          Consulta
        </label>
        <textarea class="form-control" id="text-area" rows="3"></textarea>
      </div>
      <Button text={"Enviar"} />
    </form>
  );
};
export default Form;
