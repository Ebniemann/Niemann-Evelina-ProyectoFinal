import { useState } from "react";
import "./styles.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemCount = ({ initial, stock, productAdd, courseName }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
      toast(`Sumaste el curso ${courseName}`, {
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
      toast(`Restaste curso ${courseName}`, {
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

  const handleProductAdd = () => {
    productAdd(quantity);
  };

  return (
    <div className="buyCourse">
      <div className="quantity">
        <button className="quantityAction" onClick={decrement}>
          -
        </button>
        <p>{quantity}</p>
        <button className="quantityAction" onClick={increment}>
          +
        </button>
      </div>
      <button
        className="buttonAdd"
        onClick={handleProductAdd}
        disabled={!stock}
      >
        Agregar al carrito
      </button>
    </div>
  );
};
export default ItemCount;
