import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./PgageHome/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route />
          <Route />
          <Route />
        </Routes>
      </BrowserRouter>
      <body>
        <Home />
      </body>
    </>
  );
}

export default App;
