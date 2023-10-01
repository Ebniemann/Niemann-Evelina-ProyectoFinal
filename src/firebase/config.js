import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// conf base de datos stg
const firebaseConfig = {
  apiKey: "AIzaSyAd9XSOzV3sljG5v5fg_VaEquXZsbvh3-s",
  authDomain: "evelinaecommerce.firebaseapp.com",
  projectId: "evelinaecommerce",
  storageBucket: "evelinaecommerce.appspot.com",
  messagingSenderId: "636495584947",
  appId: "1:636495584947:web:78a05ac9d010a9dcc29ac6",
};

//conf base de produccion (paso otra configuracion)
//const app initializeApp(process.env.NODE_ENV === 'TEST' ? ;

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
