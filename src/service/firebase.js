import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCNARg5-55otr778YprJLmuTv4jtoTMbWo",
  authDomain: "moonstone-studio.firebaseapp.com",
  projectId: "moonstone-studio",
  storageBucket: "moonstone-studio.appspot.com",
  messagingSenderId: "548397603828",
  appId: "1:548397603828:web:d4ce077f9e4f32498237a1",
  measurementId: "G-DPHBL6JZLL",
  databaseURL: "gs://moonstone-studio.appspot.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();
export const storage = getStorage(app);
