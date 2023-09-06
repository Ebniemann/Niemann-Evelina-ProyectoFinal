import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./PgageHome/home";
import Courses from "./PageCourses/courses";
import Faqs from "./PageFaqs/Faqs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<Courses />} />
        <Route path="/faqs" element={<Faqs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
