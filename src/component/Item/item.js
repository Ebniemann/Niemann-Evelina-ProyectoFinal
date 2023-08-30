import ItemCount from "../ItemCount/ItemCount";

const Item = ({ courses }) => {
  return (
    <div className="card">
      <div className="card-header">{courses.name}</div>
      <div className="card-body text-secondary">
        <h5 className="card-title">Incluye {courses.number_courses} cursos</h5>
        <p className="card-text">
          <ul>{courses.course_list}</ul>
        </p>
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
