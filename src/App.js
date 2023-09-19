import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./PgageHome/PageHome";
import Courses from "./PageCourses/PageCourses";
import Faqs from "./PageFaqs/PageFaqs";
import ProductsContainer from "./component/DetailContainer/DetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<Courses />} />
        <Route path="/category/:category" element={<Courses />} />
        <Route path="/cursos/:id" element={<ProductsContainer />} />
        <Route path="/faqs" element={<Faqs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
