import { useState, useEffect } from "react";
import "./styles.css";
import data from "../../data/data.json";
import Loading from "../Loading/Loading";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([]);

  const orderProduct = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 1500);
    });
  };

  useEffect(() => {
    setLoading(true);
    orderProduct()
      .then((res) => {
        setCourses(res);
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className="ItemListContainer">
      <h2>{greeting}</h2>
      {loading ? <Loading /> : <ItemList courses={courses} loading={loading} />}
    </div>
  );
};
export default ItemListContainer;
