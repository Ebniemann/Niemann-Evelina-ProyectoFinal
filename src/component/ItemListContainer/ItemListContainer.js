import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getProducts, categoryId } from "../../PedirDatos/PedirDatos";
import "./styles.css";
import Loading from "../Loading/Loading";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    setLoading(true);
    const asyncFunc = async () => {
      try {
        const res = await (category ? categoryId(category) : getProducts());
        setCourses(res);
      } finally {
        setLoading(false);
      }
    };

    asyncFunc();
  }, [category]);

  return (
    <>
      <h2>{greeting}</h2>
      <nav className="tabs">
        <NavLink to={`/cursos`}>Todos</NavLink>
        <NavLink to={`/category/producto`}>Producto</NavLink>
        <NavLink to={`/category/programacion`}>Programación</NavLink>
      </nav>

      {loading ? <Loading /> : <ItemList courses={courses} loading={loading} />}
    </>
  );
};
export default ItemListContainer;
