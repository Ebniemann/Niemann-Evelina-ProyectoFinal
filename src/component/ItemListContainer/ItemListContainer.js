import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./styles.css";
import Loading from "../Loading/Loading";
import ItemList from "../ItemList/ItemList";

import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    setLoading(true);
    const course = collection(db, "courses");

    const q = category
      ? query(course, where("category", "==", category))
      : course;

    getDocs(q)
      .then((resp) => {
        setCourses(
          resp.docs.map((doc) => {
            return {
              ...doc.data(),
              id: doc.id,
            };
          })
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
