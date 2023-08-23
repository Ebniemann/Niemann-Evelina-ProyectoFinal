import "./App.css";
import NavBar from "./component/NavBar/NavBar";
import ItemList from "./component/ItemList/ItemList";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <body>
        <ItemList greeting={"Carreras"} />
      </body>
    </>
  );
}

export default App;
