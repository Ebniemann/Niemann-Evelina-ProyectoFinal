import { useContext } from "react";
import { Link } from "react-router-dom";
import CartCourses from "../CartCourses/CartCourses";
import { CartContext } from "../Context/CartProvider";

const Cart = () => {
  const { cartItem, clearCart, total } = useContext(CartContext);
  return (
    <>
      {cartItem.map((item) => (
        <CartCourses key={item.id} item={item} />
      ))}
      <p>Total: ${total()}</p>
      <button onClick={clearCart}> Vaciar carrito</button>
      <Link>Finalizar compra</Link>
    </>
  );
};

export default Cart;
