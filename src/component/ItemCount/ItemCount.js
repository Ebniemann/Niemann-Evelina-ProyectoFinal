import { useState } from "react";
import "./styles.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemCount = ({ initial, stock, productAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
      toast("Sumo un curso", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      toast("Resto un curso", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.log("Decrement clicked. New quantity:", quantity);
    }
  };

  return (
    <>
      <div className="buyCourse">
        <button
          className="buttonAdd"
          onClick={() => productAdd(quantity)}
          disabled={!stock}
        >
          Agregar al carrito
        </button>
        <div className="quantity">
          <button className="quantityAction" onClick={decrement}>
            -
          </button>
          <p>{quantity}</p>
          <button className="quantityAction" onClick={increment}>
            +
          </button>
        </div>
      </div>
    </>
  );
};
export default ItemCount;
