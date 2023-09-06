import ItemCount from "../ItemCount/ItemCount";
import "./styles.css";

const Product = ({ courses }) => {
  return (
    <div className="card">
      <div className="card-header">{courses.name}</div>
      <div className="card-body text-secondary">
        <h5 className="card-title">Incluye {courses.number_courses} cursos</h5>
        <ul className="card-list">
          {courses.course_list.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
        <p className="price">${courses.price}</p>
      </div>
      <ItemCount
        initial={1}
        stock={3}
        productAdd={(quantity) => console.log("producto agregado", quantity)}
        courseName={courses.name}
      />
    </div>
  );
};

export default Product;
