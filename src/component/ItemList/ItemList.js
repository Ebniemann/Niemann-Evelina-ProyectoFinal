import Products from "../ProductsContainer/ProductsContainer";

const ItemList = ({ selectProduct, setSelectProduct, courses }) => {
  function handleShow(courses) {
    setSelectProduct(courses);
  }
  return (
    <div className="cards">
      {courses.map((courses) => (
        <div className="card" key={courses.id}>
          <div className="card-header">{courses.name}</div>
          <button onClick={() => handleShow(courses)}>Detalle</button>
          {selectProduct === courses && <Products courses={selectProduct} />}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
