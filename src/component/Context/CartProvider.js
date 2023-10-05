import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  const addCourse = (item, quantity) => {
    if (courseCart(item.id)) {
      setCartItem(
        cartItem.map((course) => {
          if (course.id === item.id) {
            return { ...course, quantity };
          } else {
            return course;
          }
        })
      );
    } else {
      setCartItem((prevCart) => [...prevCart, { ...item, quantity }]);
    }
  };

  const clearCart = () => {
    setCartItem([]);
  };

  const courseCart = (id) => {
    return cartItem.some((c) => c.id === id);
  };

  const deleteCourse = (id) => {
    setCartItem(cartItem.filter((c) => c.id !== id));
  };

  const cartQuantity = () => {
    return cartItem.reduce((acc, item) => acc + item.quantity, 0);
  };

  const total = () => {
    return cartItem.reduce((acc, item) => acc + item.quantity * item.price, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItem,
        addCourse,
        clearCart,
        courseCart,
        deleteCourse,
        cartQuantity,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
export default CartProvider;
