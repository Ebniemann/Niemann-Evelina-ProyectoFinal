import "./styles.css";
import ImgCart from "../../Assest/img/carrito-compras.png";

const Cart = ({ width, height, count }) => {
  return (
    <div className="cart-container">
      <img src={ImgCart} alt="carrito" width={width} height={height}></img>
      <p id="counter">{count}</p>
    </div>
  );
};

export default Cart;
