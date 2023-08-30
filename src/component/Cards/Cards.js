import ItemCards from "./ItemCards";
import Loading from "../Loading/Loading";
import data from "../../data/data.json";
import { useEffect, useState } from "react";

const Card = () => {
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(false);

  const resquetCourses = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve(data);
      }, 3000);
    });
  };

  useEffect(() => {
    setLoading(true);
    resquetCourses()
      .then((c) => {
        setCourse(c);
      })
      .finally(() => setLoading(false));
  }, []);

  return loading ? <Loading /> : <ItemCards course={course} loading={false} />;
};
export default Card;
