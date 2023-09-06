import { useState, useEffect } from "react";
import "./styles.css";
import data from "../../data/data.json";
import Loading from "../Loading/Loading";
import ItemList from "../ItemList/ItemList";
import Title from "../Title/Title";
import SubTitle from "../SubTitle/SubTitle";
import ImgHome from "../../Assest/img/Img-presentation/inicio.jpg";

const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(true);
  const [selectProduct, setSelectProduct] = useState(null);
  const [courses, setCourses] = useState([]);

  const orderProduct = () => {
    return new Promise((resolve) => {
      resolve(data);
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      orderProduct().then((res) => {
        setCourses(res);
      });
    }, 1500);
  }, []);
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
      {loading ? (
        <Loading />
      ) : (
        <ItemList
          courses={courses}
          loading={false}
          selectProduct={selectProduct}
          setSelectProduct={setSelectProduct}
        />
      )}
    </>
  );
};
export default ItemListContainer;
