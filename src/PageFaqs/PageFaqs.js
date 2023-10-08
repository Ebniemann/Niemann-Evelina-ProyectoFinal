import "./styles.css";
import Layout from "../component/Layout/Layout";
import Title from "../component/Title/Title";

const Faqs = () => {
  return (
    <Layout>
      <div className="faqsContainer">
        <div className="accordion" id="accordionExample">
          <Title text={"Preguntas frecuentes"} />
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
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
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong></strong> Podés pagar con tarjeta de crédito o débito a
                través de Mercado Pago, con dinero en cuenta de Mercado Pago o
                hacer una transferencia bancaria.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
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
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
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
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
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
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong></strong> Al estudiar Full Stack puedes convertirte en
                uno de los profesionales en tecnología más demandados por las
                compañías. Este perfil cuenta con una faceta muy completa y
                posee conocimientos y herramientas que le permiten afrontar
                cualquiera de las etapas de un desarrollo web.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Faqs;
