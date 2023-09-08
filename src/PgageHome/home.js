import Title from "../component/Title/Title";
import SubTitle from "../component/SubTitle/SubTitle";
import ImgHome from "../Assest/img/Img-presentation/inicio.jpg";

import Layout from "../component/Layout/Layout";
import "./styles.css";

const Home = () => {
  return (
    <Layout>
      <section className="presentation">
        <div className="description">
          <Title text={"Invertimos en tu educación"} />
          <SubTitle
            text={`Una plataforma de aprendizaje donde puedes desarrollar\ntus habilidades y adaptarte al futuro profesional.\nDespega tu carrera en tecnología. Estudia a remoto y de manera intensiva.`}
          />
        </div>
        <img src={ImgHome} alt="imagen Home" width={500} height={500} />
      </section>
      <section className="modality">
        <h2>Elige tu carrera</h2>
        <p>¿ Full o Part ?</p>
        <div className="subrayado"></div>
        <div className="times">
          <div className="modality-time">
            <h4>Full-time</h4>
            <p>
              Es la modalidad ideal para quienes quieren empezar una carrera en
              tecnología en muy poco tiempo. Estudia 8 horas diaras con clases
              100% a remoto y en vivo.
            </p>
          </div>
          <div className="modality-time">
            <h4>Part-time</h4>
            <p>
              Diseñada exclusivamente para aquellos que quieren aprender
              programación mientras trabajan. Estudia 3 horas por día con clases
              100% a remoto y en vivo.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Home;
