import { useState, useEffect } from "react";
import data from "../../data/data.json";
import Loading from "../Loading/Loading";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(true);
  const [selectProduct, setSelectProduct] = useState(null);
  const [courses, setCourses] = useState([]);

  const orderProduct = () => {
    return new Promise((resolve) => {
      resolve(data);
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      orderProduct().then((res) => {
        setCourses(res);
      });
    }, 1500);
  }, []);
  return (
    <>
      <h2>{greeting}</h2>
      {loading ? (
        <Loading />
      ) : (
        <ItemList
          courses={courses}
          loading={false}
          selectProduct={selectProduct}
          setSelectProduct={setSelectProduct}
        />
      )}
    </>
  );
};
export default ItemListContainer;
