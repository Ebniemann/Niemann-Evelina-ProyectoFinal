import { useContext } from "react";
import { CartContext } from "../Context/CartProvider";
import CartWidget from "../CartWidget/CartWidget";

const CartCourses = ({ item }) => {
  const { deleteCourse } = useContext(CartContext);
  return (
    <>
      <CartWidget />
      <div>
        <h3>{item.name}</h3>
        <p>Cantidad: {item.quantity}</p>
        <p>Precio unitario: ${item.price}</p>
        <p>Sub total: ${item.price * item.quantity}</p>
        <button onClick={() => deleteCourse(item.id)}>X</button>
      </div>
    </>
  );
};

export default CartCourses;
