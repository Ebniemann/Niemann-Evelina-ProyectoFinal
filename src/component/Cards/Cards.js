import "./styles.css";
import ItemCards from "./ItemCards";
import data from "../../data/data.json";
import { useEffect, useState } from "react";

const Card = () => {
  const [course, setCourse] = useState([]);

  const resquetCourses = () => {
    return new Promise((resolve) => {
      resolve(data);
    });
  };

  useEffect(() => {
    resquetCourses().then((c) => {
      setCourse(c);
    });
  }, []);

  return <ItemCards course={course} />;
};
export default Card;
