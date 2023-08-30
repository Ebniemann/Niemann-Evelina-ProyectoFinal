import ItemCount from "../ItemCount/ItemCount";

const Item = ({ courses }) => {
  return (
    <div className="card">
      <div className="card-header">{courses.name}</div>
      <div className="card-body text-secondary">
        <h5 className="card-title">Incluye {courses.number_courses} cursos</h5>
        <ul className="card-list">
          {courses.course_list.map((course) => (
            <li>{course}</li>
          ))}
        </ul>
        <p className="price">${courses.price}</p>
      </div>
      <ItemCount
        initial={1}
        stock={3}
        productAdd={(quantity) => console.log("producto agregado", quantity)}
      />
    </div>
  );
};

export default Item;
