import { useContext } from "react";
import { Link } from "react-router-dom";
import CartCourses from "../CartCourses/CartCourses";
import { CartContext } from "../Context/CartProvider";
import CartWidget from "../CartWidget/CartWidget";

const Cart = () => {
  const { cartItem, clearCart, total, cartQuantity } = useContext(CartContext);

  return (
    <>
      <div>
        {cartQuantity() > 0 ? (
          <>
            <CartWidget />
            <div>
              {cartItem.map((item) => (
                <CartCourses key={item.id} item={item} />
              ))}
              <p>Total: ${total()}</p>
              <button onClick={clearCart}> Vaciar carrito</button>
              <Link to="/checkout">Finalizar compra</Link>
            </div>
          </>
        ) : (
          <>
            <h2>Su carrito esta vacio</h2>
            <Link to={"/cursos"}> Compre un curso</Link>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
