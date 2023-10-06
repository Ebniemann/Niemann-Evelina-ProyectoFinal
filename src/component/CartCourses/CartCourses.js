import "./styles.css";
import { useContext } from "react";
import { CartContext } from "../Context/CartProvider";

const CartCourses = ({ item }) => {
  const { deleteCourse } = useContext(CartContext);
  return (
    <div className="cartCourses">
      <h5>{item.name}</h5>
      <p>Cantidad: {item.quantity}</p>
      <p>Precio unitario: ${item.price}</p>
      <p>Sub total: ${item.price * item.quantity}</p>
      <button className="fill" onClick={() => deleteCourse(item.id)}>
        X
      </button>
    </div>
  );
};

export default CartCourses;
