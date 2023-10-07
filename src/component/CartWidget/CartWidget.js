import "./styles.css";
import ImgCart from "../../Assest/img/carrito-compras.png";

import { useContext } from "react";
import { CartContext } from "../Context/CartProvider";

const CartWidget = () => {
  const { cartQuantity } = useContext(CartContext);

  return (
    <div className="cartWidget">
      <img src={ImgCart} alt="carrito" width={25} height={25}></img>
      {cartQuantity() > 0 && <span>{cartQuantity()}</span>}
    </div>
  );
};

export default CartWidget;
