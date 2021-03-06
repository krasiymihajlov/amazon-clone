import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
//import { getFirestore } from 'firebase/firestore/lite'
import { getFirestore } from 'firebase/firestore'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPAdK_VxhW6FLMqtLaT6jfxeWrveQudHE",
  authDomain: "fir-d9d80.firebaseapp.com",
  projectId: "fir-d9d80",
  storageBucket: "fir-d9d80.appspot.com",
  messagingSenderId: "81081873721",
  appId: "1:81081873721:web:1a598e7f4d168ef67624e8",
  measurementId: "G-F5DVQVHG8N"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

// "npm --prefix \"$RESOURCE_DIR\" run lint"