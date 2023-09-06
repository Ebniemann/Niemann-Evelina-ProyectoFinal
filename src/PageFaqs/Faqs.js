import "./styles.css";
import Layout from "../component/Layout/Layout";

const Faqs = () => {
  return (
    <Layout>
      <div class="container-content">
        <div class="accordion" id="accordionExample">
          <h1>Preguntas frecuentes</h1>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type=""
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                ¿Cuáles son los medios de pago?
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong></strong> Podés pagar con tarjeta de crédito o débito a
                través de Mercado Pago, con dinero en cuenta de Mercado Pago o
                hacer una transferencia bancaria.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type=""
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                ¿Qué validez tienen los cursos y carreras de E-task?
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong></strong>
                Los programas de cada una de las carreras de E-task son
                cocreados con empresas líderes en innovación de Latinoamérica
                como Bitso, Endeavor, Tiendanube, Pedidos Ya, Aerolab, R/GA,
                Digifianz, entre otras. Esto nos permite tener nuestros
                contenidos actualizados y avalados por referentes de la
                industria.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type=""
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                ¿Por qué estudiar Full Stack?
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong></strong> Al estudiar Full Stack puedes convertirte en
                uno de los profesionales en tecnología más demandados por las
                compañías. Este perfil cuenta con una faceta muy completa y
                posee conocimientos y herramientas que le permiten afrontar
                cualquiera de las etapas de un desarrollo web.
              </div>
            </div>
          </div>
        </div>

        <form class="contact" id="contacto">
          <h2>Contáctenos</h2>
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
            <span id="input_name"></span>
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
            <span id="input_email"></span>
          </div>
          <div class="mb-3">
            <label for="text-area" class="form-label">
              Consulta
            </label>
            <textarea class="form-control" id="text-area" rows="3"></textarea>
            <span id="input_text"></span>
          </div>
          <button class="button" type="button" id="btn-form">
            Enviar
          </button>
        </form>
      </div>
    </Layout>
  );
};
export default Faqs;
