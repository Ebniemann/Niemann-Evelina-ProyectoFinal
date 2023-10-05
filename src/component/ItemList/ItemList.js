import "./styles.css";
import { Link } from "react-router-dom";

const ItemList = ({ courses }) => {
  return (
    <>
      <div className="itemList">
        {courses.map((course) => (
          <div className="box-card" key={course.id}>
            <div className="box-title">{course.name}</div>
            <Link className="link" to={`/cursos/${course.id}`}>
              Detalle
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemList;
