import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../Detail/Detail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const DetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setLoading();
    const docCourse = doc(db, "courses", id);

    getDoc(docCourse)
      .then((resp) => {
        setCourse({ id: resp.id, ...resp.data() });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      {loading ? (
        <span className="loader"></span>
      ) : (
        course && <ItemDetail courses={course} />
      )}
    </>
  );
};

export default DetailContainer;
