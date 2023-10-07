import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./PgageHome/PageHome";
import Courses from "./PageCourses/PageCourses";
import Faqs from "./PageFaqs/PageFaqs";
import ProductsContainer from "./component/DetailContainer/DetailContainer";
import CartProvider from "./component/Context/CartProvider";
import Cart from "./component/Cart/Cart";
import Checkout from "./component/Checkout/checkout";
import Page404 from "./Page404/Page404";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<Courses />} />
          <Route path="/category/:category" element={<Courses />} />
          <Route path="/cursos/:id" element={<ProductsContainer />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
