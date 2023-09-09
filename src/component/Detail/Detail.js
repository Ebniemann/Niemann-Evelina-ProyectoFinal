import { Link } from "react-router-dom";
import "./styles.css";
import volver from "../../Assest/img/Iconos/izquierda.png";
const Detail = ({ courses }) => {
  return (
    <div className="detail">
      <Link to="/cursos">
        <img src={volver} alt="volver" width={50} height={50} />
      </Link>
      <div className="card-box" key={courses.id}>
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
          <h5 className="card-title">Tiempo de cursada:</h5>
          <p>{courses.number_weeks} semanas / 2 clases semanales</p>
          <span className="price">${courses.price}</span>
        </div>
      </div>
    </div>
  );
};
export default Detail;
