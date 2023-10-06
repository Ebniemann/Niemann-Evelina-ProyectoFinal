import "./styles.css";

import { useContext } from "react";
import { Link } from "react-router-dom";
import CartCourses from "../CartCourses/CartCourses";
import { CartContext } from "../Context/CartProvider";
import CartWidget from "../CartWidget/CartWidget";

const Cart = () => {
  const { cartItem, clearCart, total, cartQuantity } = useContext(CartContext);

  return (
    <div className="cart">
      {cartQuantity() > 0 ? (
        <>
          <CartWidget />
          <h2>Carrito</h2>
          <div className="orderCart">
            <div className="listOrder">
              {cartItem.map((item) => (
                <CartCourses key={item.id} item={item} />
              ))}
            </div>
            <p className="total">Total: ${total()}</p>
            <div className="option">
              <button onClick={clearCart} className="fill">
                Vaciar carrito
              </button>
              <Link className="fill" to="/checkout">
                Finalizar compra
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="emptyCart">
          <h2>Su carrito esta vacio</h2>
          <Link className="fill" to={"/cursos"}>
            Compre un curso
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
