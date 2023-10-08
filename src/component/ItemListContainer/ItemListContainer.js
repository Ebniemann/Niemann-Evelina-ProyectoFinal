import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./styles.css";
import Loading from "../Loading/Loading";
import ItemList from "../ItemList/ItemList";
import { getItems } from "../../firebaseConfig/services";

const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    setLoading(true);

    getItems(category)
      .then((resp) => {
        setCourses(
          resp.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <div className="ItemListContainer">
      <h2>{greeting}</h2>
      <nav className="tabs">
        <NavLink to={`/cursos`}>Todos</NavLink>
        <NavLink to={`/category/producto`}>Producto</NavLink>
        <NavLink to={`/category/programacion`}>Programación</NavLink>
      </nav>

      {loading ? <Loading /> : <ItemList courses={courses} loading={loading} />}
    </div>
  );
};
export default ItemListContainer;
