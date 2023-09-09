import "./styles.css";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

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
            <ItemCount
              initial={1}
              stock={3}
              productAdd={(quantity) =>
                console.log("producto agregado", quantity)
              }
              courseName={course.name}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemList;
