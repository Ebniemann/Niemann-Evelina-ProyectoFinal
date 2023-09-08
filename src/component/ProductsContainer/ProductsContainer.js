import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";

import data from "../../data/data.json";

const ProductsContainer = () => {
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([]);
  const { id } = useParams();

  const getProduct = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 1500);
    });
  };
  useEffect(() => {
    setLoading(true);
    const courseData = data.find((item) => item.id === Number(id));
    setCourses(courseData);
    setLoading(false);
  }, [id]);

  return (
    <>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <Link to="/cursos">Volver</Link>
          <div>
            <div className="card" key={courses.id}>
              <div className="card-header">{courses.name}</div>
              <div className="card-body text-secondary">
                <h5 className="card-title">
                  Incluye {courses.number_courses} cursos
                </h5>
                {courses.course_list && (
                  <ul className="card-list">
                    {courses.course_list.map((course, index) => (
                      <li key={index}>{course}</li>
                    ))}
                  </ul>
                )}
                <p className="price">${courses.price}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductsContainer;
