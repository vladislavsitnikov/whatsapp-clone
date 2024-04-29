import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCn4My61-B7HXJrepvHcWgTKJ9Ncui_z1w",
    authDomain: "whatsapp-clone-9ccc5.firebaseapp.com",
    projectId: "whatsapp-clone-9ccc5",
    storageBucket: "whatsapp-clone-9ccc5.appspot.com",
    messagingSenderId: "199726457518",
    appId: "1:199726457518:web:d1cf9365821103dd67c33f",
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { db }