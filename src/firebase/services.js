import { db } from "./config";
import {
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const getItem = (id) => {
  const courses = doc(db, "courses", id);
  return getDoc(courses);
};

//export const getItems = () => {
//const items = collection(db, "courses");
// return getDocs(items);
//};

export const getItems = (category) => {
  const items = query(
    collection(db, "courses"),
    category && where("category", "==", category)
  );
  return getDocs(items);
};
