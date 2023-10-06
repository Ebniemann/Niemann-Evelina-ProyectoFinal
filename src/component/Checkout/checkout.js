import "./styles.css";
import SubTitle from "../SubTitle/SubTitle";
import { Link } from "react-router-dom";
import { db } from "../../firebase/config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { CartContext } from "../Context/CartProvider";
import { useContext, useState } from "react";

const Checkout = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState("");
  const { cartItem, total, clearCart } = useContext(CartContext);

  const buyer = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const sendOrder = (e) => {
    e.preventDefault();
    const newErrors = [];

    if (!user.name) {
      newErrors.push("Ingrese su nombre");
    }
    if (!user.phone) {
      newErrors.push("Ingrese su teléfono");
    }
    if (!user.email) {
      newErrors.push("Ingrese su email");
    } else if (!user.email || user.email !== user.confirmEmail) {
      newErrors.push("Los email no coinciden");
    } else {
      let order = {
        user,
        item: cartItem,
        total: total(),
        date: serverTimestamp(),
      };
      const sale = collection(db, "orders");
      addDoc(sale, order)
        .then((res) => {
          setOrderId(res.id);
          clearCart();
        })
        .catch((error) => console.log(error));
    }
    setError(newErrors);
  };

  return (
    <div>
      {orderId !== "" ? (
        <>
          <h2>🎉🎉 Felicitaciones por su compra 🎉🎉</h2>
          <h3>Su N° de orden es: {orderId}</h3>
          <Link to="/">E-task</Link>
        </>
      ) : (
        <div className="checkout">
          <SubTitle text={"Datos para orden de compra"} />
          <form user={user} onSubmit={sendOrder}>
            <div className="mb-3">
              <label className="form-label">Nombre y Apellido</label>
              <input
                onChange={buyer}
                type="text"
                className="form-control"
                name="name"
                placeholder="Evelina Niemann"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Teléfono</label>
              <input
                onChange={buyer}
                type="number"
                className="form-control"
                name="phone"
                placeholder="11-1111-1111"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                onChange={buyer}
                type="email"
                className="form-control"
                name="email"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Confirmar email</label>
              <input
                onChange={buyer}
                type="email"
                className="form-control"
                name="confirmEmail"
                placeholder="name@example.com"
              />
            </div>
            <button className="btn btn-danger" type="submit">
              Comprar
            </button>
          </form>
          {error.length > 0 && (
            <div className="error">
              {error.map((error, index) => (
                <>
                  <span key={index}>{error}</span>
                  <br />
                </>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Checkout;
