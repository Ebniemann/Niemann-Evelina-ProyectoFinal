import "./styles.css";
import { useContext } from "react";
import { CartContext } from "../Context/CartProvider";

const CartCourses = ({ item }) => {
  const { deleteCourse } = useContext(CartContext);
  return (
    <>
      <div className="detailCart">
        <div className="cartCourses">
          <h5>{item.name}</h5>
          <p>{item.quantity}</p>
          <p>${item.price}</p>
          <p>${item.price * item.quantity}</p>
          <button onClick={() => deleteCourse(item.id)}>🗑️</button>
        </div>
        <hr />
      </div>
    </>
  );
};

export default CartCourses;
