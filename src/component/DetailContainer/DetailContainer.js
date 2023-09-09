import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data/data.json";
import ItemDetail from "../Detail/Detail";

const DetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      const courseData = data.find((item) => item.id === Number(id));
      setCourse(courseData);
      setLoading(false);
    }, 1500);
  }, [id]);

  return (
    <>
      {loading ? (
        <span className="loader"></span>
      ) : (
        <ItemDetail courses={course} />
      )}
    </>
  );
};

export default DetailContainer;
