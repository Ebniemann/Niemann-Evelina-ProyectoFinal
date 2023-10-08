import "./styles.css";
import { Link } from "react-router-dom";
import { db } from "../../firebaseConfig/config";
import {
  addDoc,
  collection,
  Timestamp,
  writeBatch,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";
import { CartContext } from "../Context/CartProvider";
import { useContext, useState } from "react";
import CheckoutForm from "../Checkoutform/ChekoutForm";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");
  const { cartItem, total, clearCart } = useContext(CartContext);

  const sendOrder = async ({ name, phone, email }) => {
    setLoading(true);
    try {
      const totalValue = total().toFixed(2);
      const parsedTotal = parseFloat(totalValue);
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cartItem,
        total: parsedTotal,
        date: Timestamp.fromDate(new Date()),
      };

      const batch = writeBatch(db);
      const outOfStock = [];

      const ids = cartItem.map((prod) => prod.id);
      const productsRef = collection(db, "items");
      const productsAddedFormFirestore = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      );

      const { docs } = productsAddedFormFirestore;
      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productAddedToCart = cartItem.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();
        const orderRef = collection(db, "orders");
        const orderAdded = await addDoc(orderRef, objOrder);

        setOrderId(orderAdded.id);
        clearCart();
      } else {
        console.error("Hay productos que están fuera de stock");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Estamos cargando su compra</p>;
  }

  return (
    <div>
      {orderId !== "" ? (
        <div className="congratulation">
          <h2>🎉🎉 Felicitaciones por su compra 🎉🎉</h2>
          <h3>Su N° de orden es: {orderId}</h3>
          <Link className="fill" to="/">
            Ir a Home
          </Link>
        </div>
      ) : (
        <div className="checkout">
          <CheckoutForm onConfirm={sendOrder} />
        </div>
      )}
    </div>
  );
};

export default Checkout;
