import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../Detail/Detail";
import { getItem } from "../../firebaseConfig/services";

const DetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setLoading();

    getItem(id)
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
