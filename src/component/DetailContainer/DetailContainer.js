import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data/data.json";
import ItemDetail from "../Detail/Detail";

const DetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const courseData = data.find((item) => item.id === Number(id));
    setCourses(courseData);
    setLoading(false);
  }, [id]);

  return <>{loading ? <p>Cargando...</p> : <ItemDetail courses={courses} />}</>;
};

export default DetailContainer;
