import "./styles.css";

import { useContext } from "react";
import { Link } from "react-router-dom";
import CartCourses from "../CartCourses/CartCourses";
import { CartContext } from "../Context/CartProvider";
import NavBar from "../NavBar/NavBar";

const Cart = () => {
  const { cartItem, clearCart, total, cartQuantity } = useContext(CartContext);

  return (
    <div className="cart">
      <NavBar />
      {cartQuantity() > 0 ? (
        <>
          <h2>Carrito de compras</h2>
          <Link className="fill" to="/cursos">
            Seguir comprando
          </Link>
          <div className="orderCart">
            <div className="titleDetail">
              <h3>Curso</h3>
              <p>Cantidad</p>
              <p>Precio</p>
              <p>Subtotal</p>
              <button onClick={clearCart} className="fill">
                Vaciar carrito
              </button>
            </div>
            <div>
              {cartItem.map((item) => (
                <CartCourses key={item.id} item={item} />
              ))}
            </div>
            <p className="total">Total: ${total()}</p>
            <div className="option">
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
